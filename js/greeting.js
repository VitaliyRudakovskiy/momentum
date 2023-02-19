const time = document.querySelector('.time');
const currentDate = document.querySelector('.date');
let localTimeString = '';
const greeting = document.querySelector('.greeting');
const yourName = document.querySelector('.name');

function showTime() {
    const date = new Date();
    localTimeString = date.toLocaleTimeString();
    time.textContent = localTimeString;
    setTimeout(showTime, 1000);
    showDate();
    const timeOfDay = getTimeOfDay();
    const greetingText = `Good ${timeOfDay},`;
    greeting.textContent = greetingText;
}
showTime();

function showDate() {
    const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    const date = new Date;
    const options = {month: 'long', day: 'numeric'};
    const tempDate =  `${days[date.getDay()]}, ${date.toLocaleDateString('en-US', options)}`;
    currentDate.textContent = tempDate;
}

function getTimeOfDay() {
    const date = new Date();
    let hours = date.getHours();
    let dateResult = '';

    if (hours >= 6 && hours < 12) dateResult = 'Morning';
    if (hours >= 12 && hours < 18) dateResult = 'Afternoon';
    if (hours >= 18 && hours < 24) dateResult = 'Evening';
    if (hours >= 0 && hours < 6) dateResult = 'Night';

    return dateResult;
}

//save data to local storsage
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