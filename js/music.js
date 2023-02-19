import playList from '../playList.js'

const playPrevButton = document.querySelector('.play-prev');
const playButton = document.querySelector('.play');
const playNextButton = document.querySelector('.play-next');
const playListContainer = document.querySelector('.play-list');

let isPlaying = false;
let randomNum = 0;

const audio = new Audio();

function playAudio() {
    audio.src = playList[randomNum].src;
    if (!isPlaying) {
        playButton.classList.add('pause');
        audio.currentTime = 0;
        audio.play();
        isPlaying = true;      
    }
    else {
        playButton.classList.remove('pause');
        audio.pause();
        isPlaying = false;
    }
}

audio.addEventListener('ended', () => {
    playNext();
});

function playNext() {
    if (randomNum === 3) randomNum = 0;
    else randomNum++;
    isPlaying = false;
    playAudio();
}

function playPrev() {
    if (randomNum === 0) randomNum = 3;
    else randomNum--;
    isPlaying = false;
    playAudio();
}

playButton.addEventListener('click', playAudio);
playNextButton.addEventListener('click', playNext);
playPrevButton.addEventListener('click', playPrev);

playList.forEach((item, index) => {
    const li = document.createElement('li');
    li.classList.add('play-item');
    li.textContent = item.title;
    playListContainer.append(li);

    li.addEventListener('click', () => {
        isPlaying = false;
        randomNum = index;
        playAudio();
    });
});