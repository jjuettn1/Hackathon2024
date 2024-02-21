# Bing-Nutrition

This is a project created in 24 hours as part of HackBU's 2024 Hackathon!
The purpose of this website was to fill in the gaps in the current dining website used by Binghamton University and Sodexo. Important information such as calories and macronutrients are left out and not easily accessible, so this application serves as a planner to give an estimate to help those either with dietary restrictions or fitness goals to keep on track with the nutrients they need.

### Menu to select food options
<img width="946" alt="Screenshot 2024-02-21 111527" src="https://github.com/jjuettn1/Hackathon2024/assets/112440034/3c0bb36e-962c-4809-8775-8eb35137a381">

### Menu to summarize chosen meal

<img width="949" alt="Screenshot 2024-02-21 111626" src="https://github.com/jjuettn1/Hackathon2024/assets/112440034/0c5676ab-b5b2-48cc-89ce-03e47a8611de">

Front-end created by Allen Domingo.

How did we get this information?

1. Web-scrape the Binghamton-Sodexo website for the menus.
2. Run the menu images through a text parser (OCR) to get the menu options
3. Run the text through an autocorrect module to refine the text
4. Parse through the text with RegEx to get the desired information
5. Feed the information through an API by the FDA tho get desired nutritional information
6. Take the information and output it into a JSON file that is read by the ReactJS front-end




NOTE: requires FDC API key in a .env file labeled as `KEY =` in same directory as fda_api.py

