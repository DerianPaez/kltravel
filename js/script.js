// Header desplegable
const header = document.getElementById('header')

header.addEventListener('scroll', () => {
    if (window.pageYOffset >= 20) {
        header.classList.add('header-is-active')
    } else {
        header.classList.remove('header-is-active')
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