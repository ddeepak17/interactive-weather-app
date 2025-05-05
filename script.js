let favorites = []; 

// DOM elements
const cityInput = document.getElementById('city');
const weatherIcon = document.getElementById('weather-icon');
const tempDiv = document.getElementById('temp-div');
const weatherInfo = document.getElementById('weather-info');
const hourlyForecast = document.getElementById('hourly-forecast');

// fetching data from json file
async function fetchCityData() {
  const response = await fetch('./data.json');
  const data = await response.json();
  return data;
}

// fetching weather data from Open-Meteo API
async function fetchWeatherData(latitude, longitude) {
  const currentWeatherUrl = `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&current=temperature_2m,relative_humidity_2m,weather_code,wind_speed_10m`;
  const hourlyForecastUrl = `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&hourly=temperature_2m,weather_code`;

  // fetching data from both endpoints
  const [currentResponse, hourlyResponse] = await Promise.all([
    fetch(currentWeatherUrl),
    fetch(hourlyForecastUrl),
  ]);

  const currentData = await currentResponse.json();
  const hourlyData = await hourlyResponse.json();

  return { current: currentData.current, hourly: hourlyData.hourly };
}


//displaying current weather data
function displayCurrentWeather(data) {
  const { temperature_2m, relative_humidity_2m, weather_code, wind_speed_10m } = data;

  // updating weather icon
  const iconUrl = getWeatherIconUrl(weather_code);
  weatherIcon.src = iconUrl;
  weatherIcon.style.display = 'block';

  tempDiv.textContent = "";
  weatherInfo.textContent = "";

  // updating temperature
  const tempPara = document.createElement("p");
  tempPara.textContent = `${temperature_2m}°C`;
  tempDiv.appendChild(tempPara);

  // updating weather info
  const humidityPara = document.createElement("p");
  humidityPara.textContent = `Humidity: ${relative_humidity_2m}%`;
  const windPara = document.createElement("p");
  windPara.textContent = `Wind Speed: ${wind_speed_10m} km/h`;

  weatherInfo.appendChild(humidityPara);
  weatherInfo.appendChild(windPara);
}

// displaying hourly weather forecast
function displayHourlyForecast(data) {
  const { time, temperature_2m, weather_code } = data;
  
  const maxHours = 12;

  hourlyForecast.textContent = "";

  time.slice(0, maxHours).forEach((timestamp, index) => {
    const hourlyItem = document.createElement('div');
    hourlyItem.className = 'hourly-item';

    const date = new Date(timestamp);
    let hour = date.getHours();
    let ampm = hour >= 12 ? 'PM' : 'AM';
    hour = hour % 12 || 12
    const iconUrl = getWeatherIconUrl(weather_code[index]);

    const timePara = document.createElement("p");
    timePara.textContent = `${hour}:00 ${ampm}`;

    const weatherImg = document.createElement("img");
    weatherImg.src = iconUrl;
    weatherImg.alt = "Weather Icon";
    
    const tempPara = document.createElement("p");
    tempPara.textContent = `${temperature_2m[index]}°C`;
    
    hourlyItem.appendChild(timePara);
    hourlyItem.appendChild(weatherImg);
    hourlyItem.appendChild(tempPara);

    hourlyForecast.appendChild(hourlyItem);
  });
}

// this function gets the weather icon based on weather code
function getWeatherIconUrl(weatherCode) {
  const iconMap = {
    0: 'clear-sky.png',
    1: 'partly-cloudy.png',
    2: 'partly-cloudy.png',
    3: 'partly-cloudy.png',
    45: 'fog.png',
    48: 'fog.png',
    51: 'moderate-rain.png',
    53: 'moderate-rain.png',
    55: 'moderate-rain.png',
    56: 'moderate-rain.png',
    57: 'moderate-rain.png',
    61: 'moderate-rain.png',
    63: 'moderate-rain.png',
    65: 'moderate-rain.png',
    66: 'moderate-rain.png',
    67: 'moderate-rain.png',
    71: 'snow.png',
    73: 'snow.png',
    75: 'snow.png',
    77: 'snow.png',
    80: 'moderate-rain.png',
    81: 'moderate-rain.png',
    82: 'moderate-rain.png',
    85: 'snow.png',
    86: 'snow.png',
    95: 'thunderstorms.png',
    96: 'thunderstorms.png',
    99: 'thunderstorms.png',
  };
  return `./icons/${iconMap[weatherCode] || 'clear-sky.png'}`;
}

// adding city to favorites 
function addToFavorites(city) {
  if (!favorites.includes(city)) {
    favorites.push(city);
    alert(`${city} added to favorites!`);
  } else {
    alert(`${city} is already in favorites!`);
  }
}

// displaying favorites 
function displayFavorites() {
  if (favorites.length === 0) {
    alert('No favorite cities yet!');
    return;
  }

  const favoritesList = favorites.join(', ');
  alert(`Favorite Cities: ${favoritesList}`);
}

async function getWeather() {
  const cityName = cityInput.value.trim();
  if (!cityName) {
    alert('Please enter a city name.');
    return;
  }

  const cityData = await fetchCityData();
  const city = cityData.find((c) => c.name.toLowerCase() === cityName.toLowerCase());

  if (!city) {
    alert('City not found!');
    return;
  }

  const { latitude, longitude } = city;
  const weatherData = await fetchWeatherData(latitude, longitude);

  displayCurrentWeather(weatherData.current);
  displayHourlyForecast(weatherData.hourly);

  const exsistingFavButton = document.getElementById('fav-btn');
  if (exsistingFavButton) {
    exsistingFavButton.remove();
  }

  const favoriteButton = document.createElement('button');
  favoriteButton.id = 'fav-btn';
  favoriteButton.className = 'btn custom-btn mt-3';
  favoriteButton.textContent = 'Add to Favorites';
  favoriteButton.onclick = () => addToFavorites(city.name);
  weatherInfo.appendChild(favoriteButton);
}

document.querySelector('.custom-btn[onclick="displayFavorites()"]').addEventListener('click', displayFavorites);