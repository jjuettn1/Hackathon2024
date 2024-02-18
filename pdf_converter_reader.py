# note: must install pytesseract + PyMuPDF

from PIL import Image 
import pytesseract
import os
import glob, sys, fitz
from autocorrect import Speller

spell = Speller(lang='en', only_replacements=True)


# pdf zoom settings
zoom_x = 2.0  # horizontal zoom
zoom_y = 2.0  # vertical zoom
mat = fitz.Matrix(zoom_x, zoom_y)

# parse pdf
# pdffilename = 'Resident Dining Menus_Day8_APP_tcm207-130091.pdf'

def pdfToText(pdffilename):
    doc = fitz.open(pdffilename)  # open document
    for page in doc:  # iterate through the pages
        pix = page.get_pixmap(matrix=mat)  # render page to an image
        pix.save("./imagedata/page-%i.png" % page.number)  # store image

    # defining paths
    pytesseract.pytesseract.tesseract_cmd = r"C:\Program Files\Tesseract-OCR\tesseract.exe"
    path_to_tesseract = r"C:\Program Files\Tesseract-OCR\pytesseract.exe"

    

    directory = 'imagedata'
    for image in os.listdir(directory):
        
        # store image
        img = Image.open('./imagedata/' + image) 
        
        pytesseract.tesseract_cmd = path_to_tesseract 
        
        # extraction
        #text = spell(pytesseract.image_to_string(img)) 
        text = pytesseract.image_to_string(img)
        with open("dining_hall_data.txt", "a+") as output:
            output.write(text)
            #output.write("END_OF_SECTION\n")
        # print
        # print(text[:-1])
        # print('\n')
    for filename in os.listdir(directory):
        if os.path.isfile(os.path.join(directory, filename)):
            os.remove(os.path.join(directory, filename))