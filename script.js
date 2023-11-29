// Toggle icon
let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('fa-x');
    navbar.classList.toggle('active');
};
//typed js//
const typed = new Typed('.text-decorated', {
    strings: ['Frontend Developer', 'Graphic Designer', 'Animator', 'Freelancer'],
    typeSpeed: 100,
    Speed: 100,
    backDelay: 1000,
    loop: true
});