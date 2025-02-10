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


const accordionButtons = document.querySelectorAll('.accordion-button');

accordionButtons.forEach(button => {
    // Initial setup: If the button is expanded, set the background and text color
    if (!button.classList.contains('collapsed')) {
      button.style.backgroundColor = '#CCB186'; // Background color for expanded
      button.style.color = 'white'; // Font color for expanded
    } else {
      button.style.color = 'black'; // Font color for collapsed
    }

    button.addEventListener('click', function() {
      // Reset background and text color for all buttons
      accordionButtons.forEach(btn => {
        btn.style.backgroundColor = ''; // Reset background to transparent
        btn.style.color = 'black'; // Reset text color to black
      });

      // Set background and text color for the clicked button
      if (this.classList.contains('collapsed')) {
        this.style.backgroundColor = ''; // Transparent background if collapsed
        this.style.color = 'black'; // Black text if collapsed
      } else {
        this.style.backgroundColor = '#CCB186'; // Set background color when expanded
        this.style.color = 'white'; // White text when expanded
      }
    });
  });