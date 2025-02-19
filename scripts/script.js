function openMenu(){
    const menu = document.querySelector(".menu-links");
    const icon = document.querySelector(".hamburger-icon");

    menu.classList.toggle("open");
    icon.classList.toggle("open");
}

function toggleOffCanvas() {
    const offCanvasMenu = document.getElementById('off-canvas-menu');
    const overlay = document.getElementById('overlay');
    offCanvasMenu.classList.toggle('open');
    overlay.classList.toggle('open');
}

// Show or hide the scroll-to-top button based on scroll position
window.addEventListener('scroll', function() {
    const scrollToTopBtn = document.getElementById('scrollToTopBtn');
    if (window.scrollY > 300) {
        scrollToTopBtn.classList.add('show');
    } else {
        scrollToTopBtn.classList.remove('show');
    }
});

// Scroll to the top of the page when the button is clicked
function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
}