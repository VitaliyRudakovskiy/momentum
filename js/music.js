const playPrevButton = document.querySelector('.play-prev');
const playButton = document.querySelector('.play');
const playNextButton = document.querySelector('.play-next');
//const playListContainer = document.querySelector('play-list');

let isPlay = false;
let randomNum = 0;

const audio = new Audio();

function playAudio() {
    audio.src = playList[randomNum].src;
    if (!isPlay) {
        isPlay = true;
        playButton.classList.add('pause');
        audio.currentTime = 0;
        audio.play();
    }
    else {
        isPlay = false;
        playButton.classList.remove('pause');
        audio.pause();
    }
}

function playNext() {
    if (randomNum === 3) randomNum = 0;
    else randomNum++;
    isPlay = false;
    playAudio();
}

function playPrev() {
    if (randomNum === 0) randomNum = 3;
    else randomNum--;
    isPlay = false;
    playAudio();
}

playButton.addEventListener('click', playAudio);
playNextButton.addEventListener('click', playNext);
playPrevButton.addEventListener('click', playPrev);

// const li = document.createElement('li');
// li.classList.add('play-item');
// li.textContent = playList[0];
// playListContainer.append(li);