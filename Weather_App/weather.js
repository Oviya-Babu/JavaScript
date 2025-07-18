
// WEATHER APP

const weatherForm = document.querySelector(".weatherForm");
const cityInput = document.querySelector(".cityInput");
const card = document.querySelector(".card");
const apiKey = "7392c59978ccfb75527cc0afbe29c174"; // Use your own key securely in production

weatherForm.addEventListener("submit", async (event) => {
  event.preventDefault();
  const city = cityInput.value.trim();

  if (city) {
    try {
      const weatherData = await getWeatherData(city);
      displayWeatherInfo(weatherData);
    } catch (error) {
      console.error(error);
      displayError("Could not fetch weather data. Try again.");
    }
  } else {
    displayError("Please enter a city.");
  }
});

async function getWeatherData(city) {
  const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
  const response = await fetch(apiUrl);

  if (!response.ok) {
    throw new Error("City not found");
  }

  return await response.json();
}

function displayWeatherInfo(data) {
  const {
    name: city,
    main: { temp, humidity },
    weather: [{ description, id }]
  } = data;

  const emoji = getWeatherEmoji(id);

  card.textContent = "";
  card.style.display = "flex";

  const cityDisplay = document.createElement("h1");
  cityDisplay.textContent = city;
  cityDisplay.classList.add("cityDisplay");

  const tempDisplay = document.createElement("p");
  tempDisplay.textContent = `Temperature: ${temp}°C`;
  tempDisplay.classList.add("tempDisplay");

  const descDisplay = document.createElement("p");
  descDisplay.textContent = toTitleCase(description);
  descDisplay.classList.add("descDisplay");

  const humidityDisplay = document.createElement("p");
  humidityDisplay.textContent = `Humidity: ${humidity}%`;
  humidityDisplay.classList.add("humidityDisplay");

  const emojiDisplay = document.createElement("p");
  emojiDisplay.textContent = emoji;
  emojiDisplay.classList.add("weatherEmoji");

  card.appendChild(cityDisplay);
  card.appendChild(tempDisplay);
  card.appendChild(descDisplay);
  card.appendChild(humidityDisplay);
  card.appendChild(emojiDisplay);
}

function displayError(message) {
  const errorDisplay = document.createElement("p");
  errorDisplay.textContent = message;
  errorDisplay.classList.add("errorDisplay");

  card.textContent = "";
  card.style.display = "flex";
  card.appendChild(errorDisplay);
}

function toTitleCase(str) {
  return str
    .split(" ")
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
}

function getWeatherEmoji(weatherId) {
  if (weatherId >= 200 && weatherId < 300) {
    return "⛈️"; // Thunderstorm
  } else if (weatherId >= 300 && weatherId < 500) {
    return "🌦️"; // Drizzle
  } else if (weatherId >= 500 && weatherId < 600) {
    return "🌧️"; // Rain
  } else if (weatherId >= 600 && weatherId < 700) {
    return "❄️"; // Snow
  } else if (weatherId >= 700 && weatherId < 800) {
    return "🌫️"; // Atmosphere
  } else if (weatherId === 800) {
    return "☀️"; // Clear
  } else if (weatherId > 800 && weatherId < 900) {
    return "☁️"; // Clouds
  } else {
    return "🌈"; // Default
  }
}
