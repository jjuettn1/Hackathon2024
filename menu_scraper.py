import os
import requests
import re
from urllib.request import urlopen
from bs4 import BeautifulSoup
#from fda_api import req

'''
dining_hall = {
    "c4" : "https://binghamton.sodexomyway.com/dining-near-me/c4-dining-hall",
    "app" : "https://binghamton.sodexomyway.com/dining-near-me/appalachian-dining-hall",
    "hinman" : "https://binghamton.sodexomyway.com/dining-near-me/hinman-dining-hall",
    "ciw" : "https://binghamton.sodexomyway.com/dining-near-me/college-in-the-woods-dining-hall" 
}
'''

def getDinningPDFS(url):
    page = urlopen(url)
    html_btyes = page.read()
    html = html_btyes.decode("utf-8")
    with open("dinning_hall.html", "w") as output:
        output.write(html)
        
    with open(html) as output:
        soup = BeautifulSoup(output, "lxml")

    dining_hall_a_tags = soup.find_all(href=re.compile("Resident%20Dining%20(M|m)enus"))
    return dining_hall_a_tags

