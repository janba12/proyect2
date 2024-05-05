const mobileBtn= document.querySelector('.main-nav-mobile-menu_icon');
const mobileMenu = document.querySelector('.nav-mobile-menu-ul');

mobileBtn.addEventListener('click', mobileBtnToggle);

function mobileBtnToggle() {
    mobileMenu.classList.toggle('inactive');
    console.log('funciona')
}