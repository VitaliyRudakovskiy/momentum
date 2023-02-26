const weatherIcon = document.querySelector('.weather-icon');
const temperature = document.querySelector('.temperature');
const weatherDescription = document.querySelector('.weather-description');
const wind = document.querySelector('.wind');
const humidity = document.querySelector('.humidity');
const city = document.querySelector('.city');

const weatherSettings = {
    weatherLanguage: 'en',
    windSpeed: 'Wind speed',
    windSpeedMetric: 'm/s',
    humidityText: 'Humidity'
}

async function getWeather() {
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city.value = getCityFromLocalStorage()}&lang=${weatherSettings.weatherLanguage}&appid=90e166c017ac61a4ab7f663419c4da04&units=metric`;
    const res = await fetch(url);
    const data = await res.json();

    if (data.cod === '404') {
        weatherIcon.style.visibility = 'hidden';
        temperature.textContent = "This city doesn't exist!";
        weatherDescription.textContent = '';
        wind.textContent = '';
        humidity.textContent = '';
    }
    else {
        weatherIcon.style.visibility = 'visible';
        weatherIcon.className = 'weather-icon owf';
        weatherIcon.classList.add(`owf-${data.weather[0].id}`);
        temperature.textContent = `${data.main.temp.toFixed(0)}°C`;
        weatherDescription.textContent = data.weather[0].description;
        wind.textContent = `${weatherSettings.windSpeed}: ${data.wind.speed} ${weatherSettings.windSpeedMetric}`;
        humidity.textContent = `${weatherSettings.humidityText}: ${data.main.humidity}%`;
    }
}

function setCity(event) {
    if (event.code === 'Enter') {
        setCityToLocalStorage();       
        getWeather();
    }
}

function setCityToLocalStorage() {
    localStorage.setItem('city', city.value)
}
window.addEventListener('beforeunload', setCityToLocalStorage)

function getCityFromLocalStorage() {
    if (localStorage.getItem('city')) {
        city.value = localStorage.getItem('city');
        return city.value;
    }
    return 'Minsk';
}
window.addEventListener('load', getCityFromLocalStorage);

document.addEventListener('DOMContentLoaded', getWeather);
city.addEventListener('keypress', setCity);

const languageSwitcher = document.querySelector('.language-weather');

function changeLanguageWeather() {
    if (languageSwitcher.checked) {
        weatherSettings.weatherLanguage = 'ru';
        weatherSettings.windSpeed = 'Скорость ветра';  
        weatherSettings.windSpeedMetric = 'м/с';
        weatherSettings.humidityText = 'Влажность'; 
    }
    else {
        weatherSettings.weatherLanguage = 'en';
        weatherSettings.windSpeed = 'Wind speed';
        weatherSettings.windSpeedMetric = 'm/s';
        weatherSettings.humidityText = 'Humidity';
    }
    getWeather();
}

languageSwitcher.addEventListener('click', changeLanguageWeather);