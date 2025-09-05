let navbar = document.querySelector('.navbar');
let searchForm = document.querySelector('.search-form');

document.querySelector('#menu-btn').onclick = () => {
    navbar.classList.toggle('active');
    searchForm.classList.remove('active');
};

document.querySelector('#search-btn').onclick = () => {
    searchForm.classList.toggle('active');
    navbar.classList.remove('active');
};

window.onscroll = () => {
    navbar.classList.remove('active');
    searchForm.classList.remove('active');
};


// Remove active states on scroll
window.onscroll = () => {
    navbar.classList.remove('active');
    searchForm.classList.remove('active');
};

// Animate sections on scroll
document.addEventListener('DOMContentLoaded', function () {
    const sections = document.querySelectorAll('.animated-section');

    function checkScroll() {
        sections.forEach(section => {
            const rect = section.getBoundingClientRect();
            const isVisible = rect.top <= window.innerHeight / 1.2; // adjust visibility threshold

            if (isVisible) {
                section.classList.add('animate');
            }
        });
    }

    // Run on scroll + on load
    window.addEventListener('scroll', checkScroll);
    checkScroll();
});
