document.addEventListener('DOMContentLoaded', function () {
    const burgerBtn = document.querySelector('.burger-menu--btn');
    const nav = document.querySelector('.header__menu--nav');
    const links = document.querySelector('.header__menu--links')

    burgerBtn.addEventListener('click', function (e) {
        e.preventDefault();
        burgerBtn.classList.toggle('burger-active');
        nav.classList.toggle('menu-active');
        links.classList.toggle('menu-active');
    });
});