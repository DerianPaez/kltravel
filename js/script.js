// Header desplegable
const header = document.querySelector('header')
const logo = document.getElementById('logo')

document.addEventListener('scroll', () => {
<<<<<<< HEAD
<<<<<<< HEAD
    if (window.pageYOffset >= 150) {
=======
    if (window.pageYOffset >= 80) {
>>>>>>> 9ec7e1d... Cambio al header
=======
    if (window.pageYOffset >= 80) {
>>>>>>> a7c06b1fd75fcf55c7403f9001f25d1b7a04d16f
        header.classList.add('header-is-active')
        header.style.color = "black";
        logo.src="images/Logo-black.png";

    } else {
        header.classList.remove('header-is-active')
        header.style.color = "white";
        logo.src="images/Logo-white.png";
    }
})


// Menu Hamburguesa
const buttonHamburgerOpen = document.querySelector('.menu-icon-open')
const buttonHamburgerClose = document.querySelector('.menu-icon-close')
const menuNav = document.querySelector('.menu-container')

buttonHamburgerOpen.addEventListener('click', () => {
    menuNav.classList.add('menu-is-active')
})

buttonHamburgerClose.addEventListener('click', () => {
    menuNav.classList.remove('menu-is-active')
})