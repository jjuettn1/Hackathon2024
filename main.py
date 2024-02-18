from urllib.request import urlopen
import menu_scraper, pdf_converter_reader, fda_api

def make_pdf(url):
    page = urlopen("https:"+url)
    with open("pdf.pdf", "wb") as pdf:
        pdf.write(page.read())

if __name__ == "__main__":
    for x in menu_scraper.dining_hall:
        menus = menu_scraper.getDinningPDFS(menu_scraper.dining_hall[x])
        for m in menus:
            # print(m["href"])
            make_pdf(m["href"])
            pdf_converter_reader.pdfToText("pdf.pdf")