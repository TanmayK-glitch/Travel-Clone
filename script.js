document.querySelectorAll('.footer-2 .c1, .footer-2 .c2, .footer-2 .c3, .footer-2 .c4').forEach(section => {
    section.querySelector('span').addEventListener('click', () => {
        section.classList.toggle('active');
    });
});

// Hamburger Menu
const menuToggle = document.getElementById('menuToggle');
const menuClose = document.getElementById('menuClose');
const navMenu = document.querySelector('.nav-text');
const navbar = document.querySelector('.navbar');

function openMenu() {
    navMenu.classList.add('active');
    navbar.classList.add('menu-open');
    document.body.style.overflow = 'hidden';
}

function closeMenu() {
    navMenu.classList.remove('active');
    navbar.classList.remove('menu-open');
    document.body.style.overflow = 'auto';
}

menuToggle.addEventListener('click', openMenu);
menuClose.addEventListener('click', closeMenu);

document.querySelectorAll('.nav-text a').forEach(link => {
    link.addEventListener('click', closeMenu);
});

document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape' && navMenu.classList.contains('active')) {
        closeMenu();
    }
});

window.addEventListener('resize', function() {
    if (window.innerWidth > 1100) {
        closeMenu();
    }
});

