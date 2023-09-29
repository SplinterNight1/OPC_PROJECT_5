const slides = [
    {
        "image": "slide1.jpg",
        "tagLine": "Impressions tous formats <span>en boutique et en ligne</span>"
    },
    {
        "image": "slide2.jpg",
        "tagLine": "Tirages haute définition grand format <span>pour vos bureaux et events</span>"
    },
    {
        "image": "slide3.jpg",
        "tagLine": "Grand choix de couleurs <span>de CMJN aux pantones</span>"
    },
    {
        "image": "slide4.png",
        "tagLine": "Autocollants <span>avec découpe laser sur mesure</span>"
    }
];

let currentIndex = 0;
const numberOfSlides = slides.length;

const leftArrow = document.querySelector("#banner .arrow_left");
const rightArrow = document.querySelector("#banner .arrow_right");

const dotsContainer = document.querySelector("#banner .dots");

function updateSelectedDot() {
    dots.forEach((dot, index) => {
        if (index === currentIndex) {
            dot.classList.add("dot_selected");
        } else {
            dot.classList.remove("dot_selected");
        }
    });
}

for (let i = 0; i < numberOfSlides; i++) {
    const dot = document.createElement("div");
    dot.classList.add("dot");
    dotsContainer.appendChild(dot);
}

const dots = document.querySelectorAll("#banner .dots .dot");

dots[currentIndex].classList.add("dot_selected"); // Utilisez la classe "dot_selected" pour le point actuel

function updateBanner() {
    const bannerImage = document.querySelector("#banner .banner-img");
    const tagLine = document.querySelector("#banner p");
    bannerImage.src = `./assets/images/slideshow/${slides[currentIndex].image}`;
    tagLine.innerHTML = slides[currentIndex].tagLine;
}

rightArrow.addEventListener("click", () => {
    currentIndex = (currentIndex + 1) % numberOfSlides;
    updateBanner();
    updateSelectedDot();
});

leftArrow.addEventListener("click", () => {
    currentIndex = (currentIndex - 1 + numberOfSlides) % numberOfSlides;
    updateBanner();
    updateSelectedDot();
});

dots.forEach((dot, index) => {
    dot.addEventListener("click", () => {
        currentIndex = index;
        updateBanner();
        updateSelectedDot();
    });
});

updateBanner();