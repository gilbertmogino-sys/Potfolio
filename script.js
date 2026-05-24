particlesJS("particles-js", {

    particles: {

        number: {
            value: 70,
            density: {
                enable: true,
                value_area: 800
            }
        },

        color: {
            value: "#00ff88"
        },

        shape: {
            type: "circle"
        },

        opacity: {
            value: 0.2,
            random: true
        },

        size: {
            value: 4,
            random: true
        },

        line_linked: {
            enable: true,
            distance: 150,
            color: "#00ff88",
            opacity: 0.6,
            width: 1
        },

        move: {
            enable: true,
            speed: 1,
            direction: "none",
            random: false,
            straight: false,
            out_mode: "out",
            bounce: false
        }

    },

    interactivity: {

        detect_on: "canvas",

        events: {

            onhover: {
                enable: true,
                mode: "grab"
            },

            onclick: {
                enable: true,
                mode: "push"
            },

            resize: true
        },

        modes: {

            grab: {
                distance: 180,

                line_linked: {
                    opacity: 1
                }
            },

            push: {
                particles_nb: 6
            }

        }

    },

    retina_detect: true

});

const menuToggle = document.querySelector(".menu-toggle");

const navLinks = document.querySelector(".nav-links");

menuToggle.onclick = () => {

    navLinks.classList.toggle("active");

};

/* ================= SCROLL REVEAL ================= */

ScrollReveal({

    distance:'80px',

    duration:2000,

    delay:200,

    reset:false
});

/* HERO */

ScrollReveal().reveal('.hero-content', {

    origin:'left'
});

ScrollReveal().reveal('.hero-image', {

    origin:'right'
});

/* ABOUT */

ScrollReveal().reveal('.about-image', {

    origin:'left'
});

ScrollReveal().reveal('.about-content', {

    origin:'right'
});

/* SKILLS */

ScrollReveal().reveal('.skills-left', {

    origin:'left'
});

ScrollReveal().reveal('.skills-right', {

    origin:'right'
});

ScrollReveal().reveal('.soft-skills', {

    origin:'bottom'
});

/* PROJECTS */

ScrollReveal().reveal('.project-card', {

    origin:'bottom',

    interval:200
});


const navItems = document.querySelectorAll(".nav-links a");

navItems.forEach(item => {

    item.addEventListener("click", () => {

        navLinks.classList.remove("active");

    });

});

const cursorGlow = document.querySelector(".cursor-glow");

document.addEventListener("mousemove", (e) => {

    cursorGlow.style.left = e.clientX + "px";

    cursorGlow.style.top = e.clientY + "px";

});

/* ================= MATRIX EFFECT ================= */

const canvas = document.getElementById("matrix");

const ctx = canvas.getContext("2d");

canvas.width = window.innerWidth;

canvas.height = window.innerHeight;

const letters =
"01ABCDEFGHIJKLMNOPQRSTUVWXYZ";

const fontSize = 14;

const columns =
canvas.width / fontSize;

const drops = [];

for(let x = 0; x < columns; x++){

    drops[x] = 1;
}

function drawMatrix(){

    ctx.fillStyle =
    "rgba(0, 0, 0, 0.05)";

    ctx.fillRect(
        0,
        0,
        canvas.width,
        canvas.height
    );

    ctx.fillStyle = "#00ff88";

    ctx.font =
    fontSize + "px monospace";

    for(let i = 0; i < drops.length; i++){

        const text =
        letters.charAt(
            Math.floor(
                Math.random() *
                letters.length
            )
        );

        ctx.fillText(
            text,
            i * fontSize,
            drops[i] * fontSize
        );

        if(
            drops[i] * fontSize >
            canvas.height &&
            Math.random() > 0.975
        ){

            drops[i] = 0;
        }

        drops[i]++;
    }
}

setInterval(drawMatrix, 33);

/* RESPONSIVE */

window.addEventListener("resize", () => {

    canvas.width = window.innerWidth;

    canvas.height = window.innerHeight;

});

const musicBtn = document.querySelector(".music-btn");

const bgMusic = document.getElementById("bg-music");

let isPlaying = false;

musicBtn.addEventListener("click", () => {

    if(!isPlaying){

        bgMusic.play();

        musicBtn.innerHTML =
        '<i class="fa-solid fa-pause"></i> Pause Music';

        isPlaying = true;

    }else{

        bgMusic.pause();

        musicBtn.innerHTML =
        '<i class="fa-solid fa-music"></i> Play Music';

        isPlaying = false;
    }

});

/* ===== WHATSAPP FORM ===== */

const whatsappForm =
document.getElementById("whatsapp-form");

whatsappForm.addEventListener("submit", function(e){

    e.preventDefault();

    const name =
    document.getElementById("name").value;

    const message =
    document.getElementById("message").value;

    const text =
`Hello, my name is ${name}%0A%0A${message}`;

    const phone =
"261336707814";

    window.open(
`https://wa.me/${phone}?text=${text}`,
"_blank"
    );

});