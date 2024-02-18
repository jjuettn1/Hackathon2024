import menu_scraper, pdf_converter_reader, fda_api

if __name__ == "__main__":
    for x in menu_scraper.dining_hall:
        print(menu_scraper.getDinningPDFS(menu_scraper.dining_hall[x]))