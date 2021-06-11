const menuButton = document.querySelector(".menu-btn");
const menu = document.querySelector(".nav-menu");
const menuClouseButton = document.querySelector(".menu-close");

menuButton.addEventListener('click',() => {
    menu.classList.add('is-active');
    menuClouseButton.classList.add('is-active');
});

menuClouseButton.addEventListener('click', () => {
    menuClouseButton.classList.remove('is-active');
    menu.classList.remove('is-active');
    
});