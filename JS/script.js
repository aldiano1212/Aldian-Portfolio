const navToggle = document.querySelector('.nav-hamburger');
const navList = document.querySelector('.nav-container nav:nth-child(2)');
const bodyOverflow = document.querySelector('body');

const navElement = document.querySelector('.nav-container nav:nth-child(2) ul li');

const navFirstLine = document.querySelector('.nav-hamburger ul li:nth-child(1)');
const navSecondLine = document.querySelector('.nav-hamburger ul li:nth-child(2)');
const navThirdLine = document.querySelector('.nav-hamburger ul li:nth-child(3)');

navToggle.addEventListener('click', function() {
    navList.classList.toggle('nav-list');
    navList.classList.toggle('nav-slide');
    bodyOverflow.classList.toggle('body-overflow')
    navFirstLine.classList.toggle('first-line')
    navSecondLine.classList.toggle('second-line')
    navThirdLine.classList.toggle('third-line')
});
navElement.addEventListener('click', function() {
    navList.classList.toggle('nav-list');
    navList.classList.toggle('nav-slide');
    bodyOverflow.classList.toggle('body-overflow')
});


