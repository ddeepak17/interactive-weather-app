# Interactive Weather App

A responsive weather application built with HTML, CSS, JavaScript, and Bootstrap. It fetches real-time weather data using the [Open-Meteo API](https://open-meteo.com/), displays current conditions, and includes a 12-hour hourly forecast with weather icons and a favorites system.

---

## 🌤️ About the Project

This weather app was originally built as part of an academic assignment and has been enhanced for personal learning and portfolio purposes. It's beginner-friendly and demonstrates key front-end skills like:

- API integration
- DOM manipulation
- Event handling
- Responsive design with Bootstrap

---

## 🚀 How to Run the Application

1. **Clone or Download** this repository.
2. Open the project folder.
3. Open `index.html` in any modern web browser.

### ✅ Using the App

- Enter a city name in the search bar.
- Click **"Search"** to fetch and display current weather.
- Click **"Add to Favorites"** to save a city.
- Click **"Show Favorites"** to view saved cities.

---

## ✨ Features

- ✔️ **City Search** – Search by city name.
- ✔️ **Current Weather Display** – Temperature, humidity, wind speed.
- ✔️ **Dynamic Weather Icons** – Visual feedback based on conditions.
- ✔️ **12-Hour Forecast** – Scrollable hourly weather predictions.
- ✔️ **Favorites System** – Save and manage favorite cities.
- ✔️ **Bootstrap 5.3 Integration** – Responsive and mobile-friendly UI.
- ✔️ **API Integration** – Real-time weather data using `fetch()`.
- ✔️ **Clean, Responsive Design** – Optimized for all screen sizes.

---

## 🌐 API Reference

This app uses the [Open-Meteo API](https://open-meteo.com/) to fetch current and hourly weather data.

### Base URL:
https://open-meteo.com/

### Endpoints Used:

- **Current Weather:**
https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&current=temperature_2m,relative_humidity_2m,weather_code,wind_speed_10m

- **Hourly Forecast:**
https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&hourly=temperature_2m,weather_code


---

## 🎨 UI & Styling (Bootstrap 5.3)

- **CDN-based Bootstrap CSS**
- **Containers** – For layout structure
- **Flex Utilities** – For responsive and scrollable forecast cards
- **Form Controls** – Styled inputs and buttons
- **Button Styling** – Bootstrap classes extended with custom styles
- **Viewport Handling** – `vh-100` for full-height sections

---

## 🙏 Acknowledgements

- [Bootstrap 5.3](https://getbootstrap.com/docs/5.3/getting-started/introduction/)
- [Open-Meteo API](https://open-meteo.com/)

---

## 📝 Author

**Darren Deepak**  
Originally built: *January 24, 2025*

---






 




