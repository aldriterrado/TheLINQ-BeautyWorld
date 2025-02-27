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