const time = document.querySelector('.time');
const currentDate = document.querySelector('.date');
const greeting = document.querySelector('.greeting');
const yourName = document.querySelector('.name');

const daysEnglish = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
const daysRussian = ["Воскресенье", "Понедельник", "Вторник", "Среда", "Четверг", "Пятница", "Суббота"];
let localTimeString = '';
let dateResult = '';
var language = 'en';

function showTime(daysEnglish, language) {
    const date = new Date();
    localTimeString = date.toLocaleTimeString();
    time.textContent = localTimeString;
    setTimeout(showTime, 1000);
    showDate(daysEnglish, language);
    const timeOfDay = getTimeOfDay(language);
    const greetingText = `${timeOfDay},`;
    greeting.textContent = greetingText;
}
showTime(daysEnglish, language);

function showDate(arrOfDays, language) {
    const date = new Date;
    const options = {month: 'long', day: 'numeric'};
    const tempDate =  `${arrOfDays[date.getDay()]}, ${date.toLocaleDateString(language, options)}`;
    currentDate.textContent = tempDate;
}

function getTimeOfDay(language) {
    const date = new Date();
    let hours = date.getHours();

    if (language === 'en') {
        if (hours >= 6 && hours < 12) dateResult = 'Good Morning';
        if (hours >= 12 && hours < 18) dateResult = 'Good Afternoon';
        if (hours >= 18 && hours < 24) dateResult = 'Good Evening';
        if (hours >= 0 && hours < 6) dateResult = 'Good Night';
    }
    else {
        if (hours >= 6 && hours < 12) dateResult = 'Доброе Утро';
        if (hours >= 12 && hours < 18) dateResult = 'Добрый День';
        if (hours >= 18 && hours < 24) dateResult = 'Добрый Вечер';
        if (hours >= 0 && hours < 6) dateResult = 'Доброй Ночи';
    }
    
    return dateResult;
}

//save data to local storage
function setNameToLocalStorage() {
    localStorage.setItem('name', yourName.value)
}
window.addEventListener('beforeunload', setNameToLocalStorage)

//load name value after reboot
function getNameFromLocalStorage() {
    if (localStorage.getItem('name')) {
        yourName.value = localStorage.getItem('name');
    }
}
window.addEventListener('load', getNameFromLocalStorage);

const greetingLanguageSwitcher = document.querySelector('.language-greeting');

function changeGreetingLanguage() {
    if (greetingLanguageSwitcher.checked) {
        language = 'ru';
        showTime(daysRussian, language);
    }
    else {
        language = 'en';
        showTime(daysEnglish, language);
    }
}

greetingLanguageSwitcher.addEventListener('click', changeGreetingLanguage);