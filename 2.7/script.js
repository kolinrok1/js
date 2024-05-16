const videoEl = document.createElement('video');
videoEl.setAttribute('src', "video/sample-5s.mp4");
videoEl.classList.add('video');
const playEll = document.createElement('div');
playEll.classList.add('play');
playEll.innerHTML="play";

const pauseEll = document.createElement('div');
pauseEll.classList.add('pause');
pauseEll.innerHTML="pause";

const divEl = document.querySelector('.conteiner');
divEl.appendChild(videoEl);


playEll.addEventListener('click', function (e) {
    videoEl.play();
    console.log(videoEl.duration, videoEl.currentTime);
});
pauseEll.addEventListener('click', function (e) {
    videoEl.pause();
});

const rangeEL = document.createElement('input');
rangeEL.setAttribute("type", "range");
rangeEL.setAttribute("min", "0");
rangeEL.setAttribute("max", "100");
rangeEL.setAttribute("value", "0");
rangeEL.addEventListener('change', function (e) {
    videoEl.currentTime =  e.target.value / 100 * videoEl.duration;
});
videoEl.addEventListener('timeupdate', function (e) {
    rangeEL.setAttribute("value", Math.round (videoEl.currentTime / videoEl.duration * 100))
});

const valueEL = document.createElement('input');
valueEL.setAttribute("type", "range");
valueEL.setAttribute("min", "0");
valueEL.setAttribute("max", "100");
valueEL.setAttribute("value", "0");
videoEl.addEventListener('loadeddata', function (e) {
    valueEL.setAttribute("value", videoEl.volume * 100)
});
valueEL.addEventListener('change', function (e) {
    videoEl.volume = e.target.value / 100;
});
divEl.appendChild(valueEL);
divEl.appendChild(rangeEL);
divEl.appendChild(pauseEll);
divEl.appendChild(playEll);