document.addEventListener('DOMContentLoaded', () => {
    // Smooth scroll
    const links = document.querySelectorAll('a[href^="#"]');
    for (const link of links) {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            document.querySelector(link.getAttribute('href')).scrollIntoView({ behavior: 'smooth' });
        });
    }
});
