document.addEventListener('DOMContentLoaded', function() {
    const menuToggle = document.getElementById('menuToggle');
    const mainNav = document.querySelector('.nav-container nav');

    let isMenuOpen = false; 

    menuToggle.addEventListener('click', function() {
        if (isMenuOpen) {
            mainNav.classList.remove('active');
            isMenuOpen = false;
        } else {
            mainNav.classList.add('active');
            isMenuOpen = true;
        }
    });
});
