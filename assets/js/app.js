// sticky navbar
document.addEventListener("DOMContentLoaded", function () {
    window.addEventListener('scroll', function () {
        if (window.scrollY > 50) {
            document.getElementById('navbar_top').classList.add('fixed-top');
        } else {
            document.getElementById('navbar_top').classList.remove('fixed-top');
        }
    });
});

// Active nav
let controls = document.querySelectorAll('.nav-item');
[].forEach.call(controls, el => {
    el.addEventListener('click', function () {
        [].forEach.call(controls, el => {
            if (el !== this) el.classList.remove('active-item');
        });
        this.classList.toggle('active-item');
    })
})

// Date Get
const date = new Date();
const year = date.getFullYear();
document.getElementById("year").innerHTML = year;

// Scroll Button Start
var myButton = document.getElementById("myBtn");
window.onscroll = function () { Jishu() };
function Jishu() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        myButton.style.display = "block";
    } else {
        myButton.style.display = "none";
    }
}
function Joydip() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}
// Scroll Button End



// Owl carousel
$(document).ready(function () {
    $('#carousel-1').owlCarousel({
        loop: true,
        nav: false,
        autoplay: false,
        autoplaySpeed: 3000,
        transitionStyle: "fade",
        // navText: ["<div class='nav-btn prev-slide'></div>",
        //     "<div class='nav-btn next-slide'></div>"],
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 1
            },
            1000: {
                items: 1,
            }
        }
    })

    $('#carousel-2').owlCarousel({
        loop: true,
        nav: false,
        autoplay: true,
        autoplaySpeed: 1200,
        transitionStyle: "fade",
        dots: true,
        // navText: ["<div class='nav-btn prev-slide'></div>",
        //     "<div class='nav-btn next-slide'></div>"],
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 1
            },
            1000: {
                items: 2,
            }
        }
    })


    $('.navbar-collapse a').click(function () {
        $(".navbar-collapse").collapse('hide');
    });
});
