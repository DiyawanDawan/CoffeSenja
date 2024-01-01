document.addEventListener('DOMContentLoaded', () => {
    const navbarNav = document.querySelector('.navbar-nav');
    const hamburger = document.querySelector('#humberger-menu');
    const searchForm = document.querySelector('.search-form');
    const searchInput = document.querySelector('#search-box');
    const searchButton = document.querySelector('#search-button');
    const shopingCard = document.querySelector('#shopping-card-button');
    const activeShopingCard = document.querySelector('.shoping-card')

    const itemDetailButtons = document.querySelectorAll('.item-detail-button');
    const itemDetailModal = document.querySelector('#item-detail-modal');
    const modalClose = document.querySelector('.modal .close-icon');
    
    itemDetailButtons.forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.preventDefault();
            console.log('Button clicked');
            itemDetailModal.style.display = 'flex';
        });
    });

    modalClose.addEventListener('click', (e) => {
        itemDetailModal.style.display = 'none';
        e.preventDefault();
    })

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
    
    shopingCard.addEventListener('click', (e) => {
        e.preventDefault();
        toggleActive(activeShopingCard);
    })

    document.addEventListener('click', (e) => {
        let isItemDetailButton = false;

        itemDetailButtons.forEach(btn => {
            if (btn.contains(e.target)) {
                isItemDetailButton = true;
            }
        });

        if (!isItemDetailButton && !itemDetailModal.contains(e.target)) {
            itemDetailModal.style.display = 'none';
        }

        if (!hamburger.contains(e.target) && !navbarNav.contains(e.target)) {
            navbarNav.classList.remove('active');
        }

        if (!searchButton.contains(e.target) && !searchForm.contains(e.target)) {
            searchForm.classList.remove('active');
        }

        if (!shopingCard.contains(e.target) && !activeShopingCard.contains(e.target)) {
            activeShopingCard.classList.remove('active');
        }
    });
});
