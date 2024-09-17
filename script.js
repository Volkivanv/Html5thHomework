const menuActive = document.querySelector('.menu');
const burger = document.querySelector('.nav_right-menu');
const menuClose = document.querySelector('.menu__close');


function toggleMenu(){
    menuActive.classList.toggle('hidden');
}

burger.addEventListener('click', toggleMenu);
menuClose.addEventListener('click', toggleMenu);
