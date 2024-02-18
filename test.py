import json

with open("test.json", "r") as j:
    data = json.load(j)
    newdata = {
        "name" : "eggplant",
        "protein": data["foods"][0]["foodNutrients"][0]["value"],
        "fat":data["foods"][0]["foodNutrients"][1]["value"],
        "carbs":data["foods"][0]["foodNutrients"][2]["value"],
        "calories":data["foods"][0]["foodNutrients"][3]["value"],
        "sugar":data["foods"][0]["foodNutrients"][8]["value"],
        "fiber":data["foods"][0]["foodNutrients"][9]["value"]
    }
    print(data["totalHits"])