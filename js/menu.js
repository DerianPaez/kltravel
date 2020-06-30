
// Menu Hamburger

const buttonHamburgerOpen = document.querySelector('.menu-icon-open')
const buttonHamburgerClose = document.querySelector('.menu-icon-close')
const menuNav = document.querySelector('.menu-container')

buttonHamburgerOpen.addEventListener('click', () => {
    menuNav.classList.add('menu-is-active')
})

buttonHamburgerClose.addEventListener('click', () => {
    menuNav.classList.remove('menu-is-active')
})