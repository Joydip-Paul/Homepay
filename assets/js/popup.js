// Video popup
let play = document.querySelector('.pulse-button');
let video = document.querySelector('.video-frame');
let close = document.querySelector('.close');
let videoClip = document.querySelector('.video');
play.onclick = function () {
    play.classList.add('play-active');
    video.classList.add('video-active');
    videoClip.play();
    videoClip.currentTime = 0;
}

close.onclick = function () {
    play.classList.remove('play-active');
    video.classList.remove('video-active');
    videoClip.pause();
}