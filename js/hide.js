const hideTimeButton = document.querySelector('.hide-time-btn');
const hideDateButton = document.querySelector('.hide-date-btn');
const hideGreetingButton = document.querySelector('.hide-greeting-btn');
const hideQuoteButton = document.querySelector('.hide-quote-btn');
const hideWeatherButton = document.querySelector('.hide-weather-btn');
const hideMusicButton = document.querySelector('.hide-music-btn');

const settingsButton = document.querySelector('.settings-icon');
const settingsContainer = document.querySelector('.settings__container');

let isOpen = false;

function openSettings() {
    if (!isOpen) {
        settingsContainer.style.display = 'flex';
        isOpen = true;
    }
    else {
        settingsContainer.style.display = 'none';
        isOpen = false;
    }
}

settingsButton.addEventListener('click', openSettings);
 
function hideTime() {
    if (hideTimeButton.checked) document.querySelector('.time').style.visibility = 'hidden';
    else document.querySelector('.time').style.visibility = 'visible';
}

function hideDate() {
    if (hideDateButton.checked) document.querySelector('.date').style.visibility = 'hidden';
    else document.querySelector('.date').style.visibility = 'visible';
}

function hideGreeting() {
    if (hideGreetingButton.checked) document.querySelector('.greeting-container').style.visibility = 'hidden';
    else document.querySelector('.greeting-container').style.visibility = 'visible';
}

function hideQuote() {
    if (hideQuoteButton.checked) document.querySelector('.quote__block').style.visibility = 'hidden';
    else document.querySelector('.quote__block').style.visibility = 'visible';
}

function hideWeather() {
    if (hideWeatherButton.checked) {
        document.querySelector('.weather').style.visibility = 'hidden';
        document.querySelector('.weather-icon').style.visibility = 'hidden';
    }
    else {
        document.querySelector('.weather').style.visibility = 'visible';
        document.querySelector('.weather-icon').style.visibility = 'visible';
    }
}

function hideMusic() {
    if (hideMusicButton.checked) {
        document.querySelector('.player').style.visibility = 'hidden';
        document.querySelector('.player__body').style.visibility = 'hidden';
    }
    else document.querySelector('.player').style.visibility = 'visible';
}

hideTimeButton.addEventListener('click', hideTime);
hideDateButton.addEventListener('click', hideDate);
hideGreetingButton.addEventListener('click', hideGreeting);
hideQuoteButton.addEventListener('click', hideQuote);
hideWeatherButton.addEventListener('click', hideWeather);
hideMusicButton.addEventListener('click', hideMusic);