// Video popup
let play = document.querySelector('.pulse-button');
let video = document.querySelector('.video-frame');
let close = document.querySelector('.close');
let videoClip = document.querySelector('.video');
let vid = document.querySelector('.video');
let body = document.querySelector('.blaze-services');
let hero = document.querySelector('.blaze-hero h1');
let hero2 = document.querySelector('.blaze-hero p');
var pulseBtn = document.querySelector('.pulse-area');

play.onclick = function () {
    play.classList.add('play-active');
    video.classList.add('video-active');
    videoClip.play();
    videoClip.currentTime = 0;
    hero.style.opacity = "0";
    hero2.style.opacity = "0";
    pulseBtn.style.opacity = "0";
}

close.onclick = function () {
    play.classList.remove('play-active');
    video.classList.remove('video-active');
    videoClip.pause();
    hero.style.opacity = "1";
    hero2.style.opacity = "1";
    pulseBtn.style.opacity = "1";
}

body.onclick = function () {
    play.classList.remove('play-active');
    video.classList.remove('video-active');
    videoClip.pause();
    hero.style.opacity = "1";
    hero2.style.opacity = "1";
    pulseBtn.style.opacity = "1";
}

// var bar1 = document.querySelector('.menu-bar1');

// bar1.onclick = function () {
//     bar1.style.rotate = "20deg";
// }