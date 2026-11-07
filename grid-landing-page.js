const menuToggle = document.querySelector('.menu-toggle');
console.log(menuToggle);
const mainNav = document.getElementById('main-nav');
console.log(mainNav);
menuToggle.addEventListener('click', function() {
    const isOpen = mainNav.classList.toggle('is-open');
    menuToggle.setAttribute('aria-expanded', isOpen);
    menuToggle.classList.toggle('is-open');
    console.log('Burger clicked');
if (isOpen) {
    menuToggle.setAttribute('aria-label', 'Close menu');
} else {
    menuToggle.setAttribute('aria-label', 'Open menu');
}
});

