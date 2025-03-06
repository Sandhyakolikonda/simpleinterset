const apiKey = "cee912789d5ae982669ecf5d05923099"; 
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const searchBox = document.querySelector("#city-input");
const searchBtn = document.querySelector("#search-btn");
const weatherIcon = document.querySelector("#weather-icon");

async function checkWeather(city) {
  const response = await fetch(apiUrl + city + `&appid=${apiKey}`);
  const data = await response.json();

  if (response.status === 404) {
    alert("City not found!");
    return;
  }

  
  document.querySelector("#city-name").innerHTML = data.name + ", " + data.sys.country;
  document.querySelector("#temp").innerHTML = Math.round(data.main.temp);
  document.querySelector("#humidity").innerHTML = data.main.humidity;
  document.querySelector("#wind").innerHTML = data.wind.speed;
  document.querySelector("#weather-description").innerHTML = data.weather[0].description;

  
  weatherIcon.src = `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;

  
  document.querySelector(".weather-info").style.display = "block";

  
  const date = new Date();
  document.querySelector("#date").innerHTML = date.toLocaleDateString("en-US", {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  searchBox.value = "";
}

searchBtn.addEventListener("click", () => {
  checkWeather(searchBox.value);
});


searchBox.addEventListener("keypress", (e) => {
  if (e.key === "Enter") {
    checkWeather(searchBox.value);
    
  }
});


checkWeather("London");