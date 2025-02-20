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

// Add this to your existing JavaScript
document.addEventListener('DOMContentLoaded', function() {
    const textElement = document.querySelector('.text-paragraph1');
    const texts = ["Software Engineer", "Software Developer", "DevOps Engineer", "Software Tester", "UI/UX Designer"];
    let index = 0;

    function typeText() {
        textElement.textContent = texts[index];
        textElement.style.animation = 'none';
        setTimeout(() => {
            textElement.style.animation = '';
        }, 10);

        index = (index + 1) % texts.length;
        setTimeout(typeText, 3500); // Adjust the delay to match the CSS animation duration
    }

    typeText();
});