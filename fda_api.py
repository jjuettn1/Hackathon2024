import requests
import os
import json
from dotenv import load_dotenv

load_dotenv()
key = os.getenv("KEY")
api_url = "https://api.nal.usda.gov/fdc/v1/foods/search"

def req(q):
    query = q.strip().replace(" ", r"%20")
    response = requests.get(api_url+"?api_key="+key+"&query="+query+"&dataType=Survey (FNDDS)")
    # with open("intermediate.json", "w") as out:
    #     json.dump(response.json(), out, indent=2)
    return response.json()

# req("cheddar cheese")