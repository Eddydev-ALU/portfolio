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