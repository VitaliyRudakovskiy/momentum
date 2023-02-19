const slideNext = document.querySelector('.slide-next');
const slidePrev = document.querySelector('.slide-prev');
const body = document.querySelector('body');

let randomNumber = 1;
randomNumber = Math.floor(Math.random() * 20) + 1; //Максимум и минимум включаются

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

//set background image
function setBg() {
    const timeOfDay = getTimeOfDay().toLocaleLowerCase();
    const bgNum = randomNumber.toString().padStart(2, '0');
    const link = `https://raw.githubusercontent.com/rolling-scopes-school/stage1-tasks/assets/images/${timeOfDay}/${bgNum}.jpg`;

    //put background image as body background onle after it had been loaded
    //now there are no problems with grey background
    const img = new Image();
    img.src = link;
    img.addEventListener('load', () => {
        body.style.backgroundImage = `url(${img.src})`;
    });
}
setBg();

//change slides by clicking 
function getSlideNext() {
    if (randomNumber === 20) randomNumber = 1;
    else randomNumber++;
    setBg();
}

function getSlidePrev() {
    if (randomNumber === 1) randomNumber = 20;
    else randomNumber--;
    setBg();
}

slideNext.addEventListener('click', getSlideNext);
slidePrev.addEventListener('click', getSlidePrev);