import playList from '../playList.js'

const playPrevButton = document.querySelector('.play-prev');
const playButton = document.querySelector('.play');
const playNextButton = document.querySelector('.play-next');
const playListContainer = document.querySelector('.play-list');
const playerBody = document.querySelector('.player__body');
const musicName = document.querySelector('.music-name');
const musicDuration = document.querySelector('.music-length');
const currentMusicTime = document.querySelector('.current-time');
const timeline = document.querySelector('.timeline');
const progressBar = document.querySelector('.progress-bar');
const volumeIcon = document.querySelector('.volume-icon');
const volumeSlider = document.querySelector('.volume-slider');
const volumeLevel = document.querySelector('.volume-percentage');

let isPlaying = false;
let randomNum = 0;

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

const li = document.getElementsByClassName('play-item');

const audio = new Audio();

function playAudio() {
    playerBody.style.visibility = 'visible';
    audio.src = playList[randomNum].src;
    audio.volume = 0.75;

    for (let index = 0; index < li.length; index++) {
        if (index === randomNum) li[index].style.color = '#2cb7c4';
        else li[index].style.color = '#FFFFFF';
    }

    musicDuration.textContent = playList[randomNum].duration;
    musicName.textContent = playList[randomNum].title;

    if (!isPlaying) {
        playButton.classList.add('pause');
        audio.play();
        isPlaying = true;
    }
    else {
        playButton.classList.remove('pause');
        audio.pause();
        isPlaying = false;
    }
}

audio.addEventListener('ended', playNext);

function playNext() {
    li[randomNum].style.color = 'white';
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

//click on timeline to skip around
timeline.addEventListener('click', e => {
    const timelineWidth = window.getComputedStyle(timeline).width;
    const timeToSeek = e.offsetX / parseInt(timelineWidth) * audio.duration;
    audio.currentTime = timeToSeek;
});

//check audio percentage and update time accordingly
setInterval(() => {
    progressBar.style.width = audio.currentTime / audio.duration * 100 + '%';
    currentMusicTime.textContent = getTimeCodeFromNum(audio.currentTime);
}, 100);

function getTimeCodeFromNum(num) {
    let seconds = parseInt(num);
    let minutes = parseInt(seconds / 60);
    seconds -= minutes * 60;
    return `${minutes}:${String(seconds % 60).padStart(2, 0)}`;
}

let isMute = false;
let volumeKoef = 0.75;

function mute() {
    if (!isMute) {
        audio.volume = 0;
        isMute = true;
    }
    else {
        audio.volume = volumeKoef;
        isMute = false;
    }
}

volumeIcon.addEventListener('click', mute);

//click volume slider to change volume
volumeSlider.addEventListener('click', e => {
  const sliderWidth = window.getComputedStyle(volumeSlider).width;
  const newVolume = e.offsetX / parseInt(sliderWidth);
  audio.volume = newVolume;
  volumeKoef = newVolume;
  volumeLevel.style.width = newVolume * 100 + '%';
});