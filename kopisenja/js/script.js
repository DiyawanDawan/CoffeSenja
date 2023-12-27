document.addEventListener('DOMContentLoaded', () => {
    const navbarNav = document.querySelector('.navbar-nav');
    const hamburger = document.querySelector('#humberger-menu');
    const searchForm = document.querySelector('.search-form');
    const searchInput = document.querySelector('#search-box');
    const searchButton = document.querySelector('#search-button');

    const toggleActive = (element) => element.classList.toggle('active');
    
    searchButton.addEventListener('click', (e) => {
        e.preventDefault();
        toggleActive(searchForm);
        searchInput.focus();
    });

    hamburger.addEventListener('click', (e) => {
        e.preventDefault();
        toggleActive(navbarNav);
    });

    document.addEventListener('click', (e) => {
        if (!hamburger.contains(e.target) && !navbarNav.contains(e.target)) {
            navbarNav.classList.remove('active');
        }

        if (!searchButton.contains(e.target) && !searchForm.contains(e.target)) {
            searchForm.classList.remove('active');
        }
    });
});
