document.addEventListener('DOMContentLoaded', function () {
    const openMenu = document.getElementById('openMenu');
    const closeMenu = document.getElementById('closeMenu');
    const mobileMenu = document.getElementById('mobileMenu');

    openMenu.addEventListener('click', function () {
        mobileMenu.classList.add('open');
    });

    closeMenu.addEventListener('click', function () {
        mobileMenu.classList.remove('open');
    });
}); 