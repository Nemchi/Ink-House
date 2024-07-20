document.addEventListener('DOMContentLoaded', function () {
    const burgerBtn = document.querySelector('.burger-menu--btn');
    const nav = document.querySelector('.header__menu--nav');
    const links = document.querySelector('.header__menu--links')
    const menu_link = document.querySelector('.menu-link')

    burgerBtn.addEventListener('click', function (e) {
        e.preventDefault();
        burgerBtn.classList.toggle('burger-active');
        nav.classList.toggle('menu-active');
        links.classList.toggle('links-active');
    });

    menu_link.addEventListener('click', function (e) {
        e.preventDefault();
        burgerBtn.classList.remove('burger-active');
        nav.classList.remove('menu-active');
        links.classList.remove('links-active');
    })
});