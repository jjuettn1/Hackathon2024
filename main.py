from urllib.request import urlopen
import json
import menu_scraper, pdf_converter_reader, fda_api, re

items = {'c4': {'D': {'item': []}, 'Friday': [], 'Saturday': [], 'Sunday': []}
, 'hinman': {'D': {'item': []}, 'Friday': [], 'Saturday': [], 'Sunday': []}
, 'ciw': {'D': {'item': []}, 'Friday': [], 'Saturday': [], 'Sunday': []}
, 'app': {'D': {'item': []}, 'Friday': [], 'Saturday': [], 'Sunday': []}}

def make_pdf(url):
    page = urlopen("https:"+url)
    with open("pdf.pdf", "wb") as pdf:
        pdf.write(page.read())

def parse_text(dining_hall, day):
    print(dining_hall + " " + day)
    with open('dining_hall_data.txt', 'r') as file:
        data = file.read().replace('\n', "%")
    possible_items = re.findall( "(([a-zA-Z]{3,}\s)+(\$){0,1}[0-9]\.[0-9][0-9])", data) 
    for x in possible_items:
        final = x[0].split('$')
        if (day == "Friday") or (day == "Saturday") or (day == "Sunday"):
            items[dining_hall][day].append((final[0], final[1]))
        else:
            week_day = {"day" : day}
            items[dining_hall]['D'].update(week_day)
            items[dining_hall]['D']['item'].append((final[0], final[1]))


if __name__ == "__main__":
    for x in menu_scraper.dining_hall:
        menus = menu_scraper.getDinningPDFS(menu_scraper.dining_hall[x])
        for m in menus:
            # print(m["href"])
            day = re.search("(Monday)|(Tuesday)|(Wednesday)|(Thursday)|(Friday)|(Saturday)|(Sunday)", str(m))
            if day == None:
                continue
            make_pdf(m["href"])
            pdf_converter_reader.pdfToText("pdf.pdf")
            parse_text(x, day.group())
            file = open('dining_hall_data.txt', 'r+')
            file.truncate(0)
    for hall in items:
        for day in items[hall]:
            if day == "D":
                for i in range(len(items[hall][day]["item"])):
                    info = fda_api.req(items[hall][day]["item"][i][0])
                    if(info["totalHits"] == 0):
                        newdata = {
                            "name" : items[hall][day]["item"][i][0],
                            "protein": "",
                            "fat":"",
                            "carbs":"",
                            "calories":"",
                            "sugar":"",
                            "fiber":""
                        }
                    else:
                        newdata = {
                        "name" : items[hall][day]["item"][i][0],
                            "protein": info["foods"][0]["foodNutrients"][0]["value"],
                            "fat":info["foods"][0]["foodNutrients"][1]["value"],
                            "carbs":info["foods"][0]["foodNutrients"][2]["value"],
                            "calories":info["foods"][0]["foodNutrients"][3]["value"],
                            "sugar":info["foods"][0]["foodNutrients"][8]["value"],
                            "fiber":info["foods"][0]["foodNutrients"][9]["value"]
                        }
            else:
                for i in range(len(items[hall][day])):
                    info = fda_api.req(items[hall][day][i][0])
                    if(info["totalHits"] == 0):
                        newdata = {
                            "name" : items[hall][day][i][0],
                            "protein": "",
                            "fat":"",
                            "carbs":"",
                            "calories":"",
                            "sugar":"",
                            "fiber":""
                        }
                    else:
                        newdata = {
                        "name" : items[hall][day][i][0],
                            "protein": info["foods"][0]["foodNutrients"][0]["value"],
                            "fat":info["foods"][0]["foodNutrients"][1]["value"],
                            "carbs":info["foods"][0]["foodNutrients"][2]["value"],
                            "calories":info["foods"][0]["foodNutrients"][3]["value"],
                            "sugar":info["foods"][0]["foodNutrients"][8]["value"],
                            "fiber":info["foods"][0]["foodNutrients"][9]["value"]
                        }
            
            
    with open("output.json", "w") as output:
        json.dump(items, output, indent=2)
