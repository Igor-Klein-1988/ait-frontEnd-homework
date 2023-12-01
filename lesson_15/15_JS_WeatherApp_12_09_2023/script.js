const API_KEY = "";
const BASE_URL = "https://api.openweathermap.org/data/2.5/weather";
const CELSIUS_SYMBOL = "\u00B0C";

// https://api.openweathermap.org/data/2.5/weather?q={city name}&appid={API key}

const locationInput = document.getElementById("locationInput");
const getWeatherButton = document.getElementById("getWeatherButton");
const weatherContainer = document.getElementById("weatherContainer");

getWeatherButton.addEventListener("click", async () => {
  const location = locationInput.value.trim();

  if (location) {
    const apiUrl = `${BASE_URL}?q=${location}&appid=${API_KEY}`;

    const response = await fetch(apiUrl);
    const data = await response.json();
    console.log(data);
    const {
      name,
      main: { temp, feels_like, temp_min, temp_max, pressure, humidity },
      sys: { country, sunrise, sunset },
    } = data;
    weatherContainer.innerHTML = `
    <div>City: ${name}</div>
    <div>Country: ${country}</div>
    <div>Temperature: ${(temp - 273.15).toFixed(2)} ${CELSIUS_SYMBOL}</div>
    <div>Feels like: ${(feels_like - 273.15).toFixed(2)} ${CELSIUS_SYMBOL}</div>
    <div>Max temperature: ${(temp_max - 273.15).toFixed(
      2
    )} ${CELSIUS_SYMBOL}</div>
    <div>Min temperature: ${(temp_min - 273.15).toFixed(
      2
    )} ${CELSIUS_SYMBOL}</div>
    <div>Pressure: ${pressure} hPa</div>
    <div>Humidity: ${humidity}%</div>
    <div>Sunrise: ${getFormattedDayTime(sunrise)}</div>
    <div>Sunset: ${getFormattedDayTime(sunset)}</div>
    `;
  }
});

function getFormattedDayTime(timestamp) {
  const date = new Date(timestamp * 1000);
  const day = formattedValue(date.getDate());
  const month = formattedValue(date.getMonth() + 1);
  const year = date.getFullYear();
  const hours = formattedValue(date.getHours());
  const minutes = formattedValue(date.getMinutes());

  return `${hours}:${minutes} ${day}.${month}.${year}`;
}

const formattedValue = (value) => (value > 9 ? value : "0" + value);
