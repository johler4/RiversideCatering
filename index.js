// navigation
window.addEventListener("scroll", function() {
    let nav = document.querySelector("nav");
    nav.classList.toggle("sticky", window.scrollY > 0)
})







/*
// image-carousel
const carouselSlide = document.querySelector('.carousel-slide');
const images = document.querySelectorAll('.carousel=slide img');

// set intitial position
let counter = 1;
const slideWidth = images[0].clientWidth;
carouselSlide.getElementsByClassName.transform = `translateX(-${slideWidth * counter}px)`;

// function to move to the next slide
const nextSlide = () => {
    if (counter >= images.length - 1) return;
    carouselSlide.style.transition = 'transform 0.3s ease-in-out';
    counter++;
    carouselSlide.style.transform = `translateX(-${slideWidth * counter}px)`;
};

// set autoplay interval
let autoplayInterval = setInterval(nextSlide, 3000);

// pauise autoplay on mouse hover
carouselSlide.addEventListener('mouseenter', () => {
    clearInterval(autoplayInterval);
});

// resume autoplay on mouse leave
carouselSlide.addEventListener('mouseleave', () => {
    autoplayInterval = setInterval(nextSlide, 3000);
});
*/