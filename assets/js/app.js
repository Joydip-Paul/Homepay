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

// const sections = document.querySelectorAll(".section");
// const navLi = document.querySelectorAll(".nav-item");
// window.onscroll = () => {
//     var current = "";

//     sections.forEach((section) => {
//         const sectionTop = section.offsetTop;
//         if (pageYOffset >= sectionTop - 60) {
//             current = section.getAttribute("id");
//         }
//     });

//     navLi.forEach((li) => {
//         li.classList.remove("active");
//         if (li.classList.contains(current)) {
//             li.classList.add("active");
//         }
//     });
// };