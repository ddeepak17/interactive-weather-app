# Assignment 1 - Interactive Web Application

## Student Information

- **Name**: [Darren Deepak]
- **Student ID**: [B00966106]
- **Date Created**: [January 24, 2025]

## Application Type and Description

Application Type: Weather Application
I chose to build a Weather Application because it is practical, beginner-friendly, and
allows me to learn how to fetch and display real-time data using API's. Weather apps are
easy to design, and working on this assignment will help me go through the basics of
web development again. This is also a great way to explore API integration, which is a
key skill for modern web development.

## Steps to Set Up & Run the Application
1. Clone or Download the Repository  
2. Navigate to the project directory
3. Open `index.html` in a Web Browser 
4. Use the Application  
- Type a city name in the search bar.  
- Click "Search" to retrieve the weather data.  
- Click "Add to Favorites" to save a city.  
- Click "Show Favorites" to see saved cities.

---

## Features Implemented
✔ City Search – Users can search for weather data by city name.  
✔ Current Weather Display – Shows temperature, humidity, and wind speed.  
✔ Weather Icons – Displays dynamic icons based on weather conditions.  
✔ Hourly Forecast – Displays a 12-hour weather forecast in a scrollable UI.  
✔ Favorites System – Users can add and view favorite cities.  
✔ Bootstrap Integration – Uses Bootstrap 5.3 for responsive styling.  
✔ API Data Fetching – Retrieves real-time weather data using `fetch()`.  
✔ Fully Responsive Design – Mobile-friendly UI optimized with Bootstrap.

---

## API Used & URLs
This project fetches real-time weather data from Open-Meteo API.
- Base URL:
https://open-meteo.com/
- Current Weather API Endpoint Used: 
`https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&current=temperature_2m,relative_humidity_2m,weather_code,wind_speed_10m`;
 - Retrieves current temperature, humidity, wind speed, and weather conditions.

- Hourly Forecast API Endpoint:  
hourlyForecastUrl = `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&hourly=temperature_2m,weather_code`;
- Retrieves hourly weather forecast for up to 12 hours.

---

## Citations & Acknowledgements

Bootstrap Framework
This project uses Bootstrap 5.3 for styling and responsiveness. Below are the specific components and utilities referenced:

1. CSS:
   - Bootstrap CSS files included via CDN.
   - [Bootstrap CDN for CSS](https://getbootstrap.com/docs/5.3/getting-started/introduction/#css)

2. Layout Utilities:
   - Used `container` for layout and alignment.
   - [Bootstrap Container Documentation](https://getbootstrap.com/docs/5.3/layout/containers/)

3. Flexbox Utilities:
   - Applied `d-flex`, `align-items-center`, `justify-content-center`, and `flex-nowrap` for alignment and layout.
   - [Bootstrap Flex Utilities](https://getbootstrap.com/docs/5.3/utilities/flex/)

4. Sizing Utilities:
   - Used `vh-100` to ensure full viewport height for the main container.
   - [Bootstrap Sizing Utilities](https://getbootstrap.com/docs/5.3/utilities/sizing/)

5. Form Control:
   - Styled the input field with `form-control` for consistent appearance.
   - [Bootstrap Form Control Documentation](https://getbootstrap.com/docs/5.3/forms/overview/)

6. Button Styling:
   - Applied the `btn` class for button styling and extended it with custom styles.
   - [Bootstrap Button Documentation](https://getbootstrap.com/docs/5.3/components/buttons/)

7. Flexbox for Hourly Forecast:
   - Used `d-flex` and `flex-nowrap` for the horizontal scrolling forecast layout.
   - [Bootstrap Flex Utilities](https://getbootstrap.com/docs/5.3/utilities/flex/)

### Final Notes
This weather application successfully demonstrates API fetching, DOM manipulation, event handling, and responsive design using Bootstrap. 
 
 




