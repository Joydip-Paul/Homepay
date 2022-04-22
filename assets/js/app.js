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

let controls = document.querySelectorAll('.nav-item');
[].forEach.call(controls, el => {
    el.addEventListener('click', function () {
        [].forEach.call(controls, el => {
            if (el !== this) el.classList.remove('active');
        });
        this.classList.toggle('active');
    })
})

// Date Get
const date = new Date();
const year = date.getFullYear();
document.getElementById("year").innerHTML = year;

$('.owl-carousel').owlCarousel({
    loop: false,
    margin: 10,
    nav: true,
    navText: ["<div class='nav-btn prev-slide'></div>",
        "<div class='nav-btn next-slide'></div>"],
    responsive: {
        0: {
            items: 1
        },
        600: {
            items: 1
        },
        1000: {
            items: 1,
            autoHeight: true,
            mouseDrag: true,
            touchDrag: true,
        }
    }
})

