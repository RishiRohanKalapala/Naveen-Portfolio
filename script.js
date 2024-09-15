// Add any interactive JS functionalities here
// Example: smooth scrolling for the menu
document.querySelectorAll('nav ul li a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const targetSection = document.querySelector(this.getAttribute('href'));
        window.scrollTo({
            top: targetSection.offsetTop - 50,
            behavior: 'smooth'
        });
    });
});
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('nav ul');

hamburger.addEventListener('click', () => {
    navMenu.classList.toggle('active');
});
