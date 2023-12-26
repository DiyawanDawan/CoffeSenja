document.addEventListener('DOMContentLoaded', () => {
    const nanbarNav = document.querySelector('.navbar-nav');
    const hamburger = document.querySelector('#humberger-menu');
    document.querySelector('#humberger-menu').onclick = (e) => {
        e.stopPropagation();
        nanbarNav.classList.toggle('active');
    }

    document.addEventListener('click', function(e) {
        if (!hamburger.contains(e.target) && !nanbarNav.contains(e.target)) {
            nanbarNav.classList.remove('active');
        }
    });
});
