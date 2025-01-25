const navEL = document.querySelector('.navbar');
const navLinks = document.querySelectorAll('.nav-link')
const menuBar = document.querySelector('.fa-bars')

window.addEventListener('scroll', () => {
    if (window.scrollY >= 56) {
        navEL.classList.add('navbar-scrolled', 'shadow')
        menuBar.classList.add('menubar-scrolled')
        navLinks.forEach(link => {
            if (!link.classList.contains('active')) { // Check if link is not active
                link.classList.remove('text-white')
                link.style.color = '#3B3A3E'; // Change color to black
            }
        });
    } else if (window.scrollY < 56){
        navEL.classList.remove('navbar-scrolled', 'shadow')
        menuBar.classList.remove('menubar-scrolled')
        navLinks.forEach(link => {
            if (!link.classList.contains('active')) { // Check if link is not active
                link.classList.add('text-white')
                link.style.color = ''; // Change color to black
            }
        });
    }
})