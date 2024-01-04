// script.js

document.addEventListener('DOMContentLoaded', function () {
    const getStartedButtons = document.querySelectorAll('.main__btn');
    const navLinks = document.querySelectorAll('.navbar__links');

    // Add click event listener to each "Get Started" button
    getStartedButtons.forEach(function (button) {
        button.addEventListener('click', function () {
            // Redirect to a new page specific to the "Tech" section
            window.location.href = 'tech.html';
        });
    });

    // Add click event listener to each link in the navbar__menu
    navLinks.forEach(function (link) {
        link.addEventListener('click', function (event) {
            event.preventDefault(); // Prevent the default behavior of the link

            // Get the href attribute of the clicked link
            const href = link.getAttribute('href');

            // Perform different actions based on the href value
            if (href === 'home.html') {
                // Code for the "Home" link
                window.location.href = 'home.html'; // Replace this with your actual code
            } else if (href === 'tech.html') {
                // Code for the "Tech" link
                window.location.href = 'tech.html'; // Replace this with your actual code
            } else if (href === 'about.html') {
                // Code for the "Sign Up" link
                window.location.href = 'about.html'; // Replace this with your actual code
            }
        });
    });

    // Use JavaScript to set the background image dynamically based on the data attribute
document.addEventListener("DOMContentLoaded", function () {
    var animeCards = document.querySelectorAll(".anime__card");
  
    animeCards.forEach(function (card) {
      var imageUrl = card.getAttribute("data-image-url");
      card.style.backgroundImage = "linear-gradient(to bottom, rgba(0, 0, 0, 0) 0%, rgba(17, 17, 17, 0.6) 100%), url('" + imageUrl + "')";
      card.style.backgroundSize = "cover";
    });
  });
  
  document.addEventListener('DOMContentLoaded', function () {
    const getStartedButtons = document.querySelectorAll('.services__btn');

    // Add click event listener to each "Get Started" button
    getStartedButtons.forEach(function (button) {
        button.addEventListener('click', function () {
            // Redirect to a new page specific to the "Tech" section
            window.location.href = 'tech.html';
        });
    });
});

  // Add click event listener to each button inside .services__card
  const serviceButtons = document.querySelectorAll('.services__card button');

  serviceButtons.forEach(function (button, index) {
    button.addEventListener('click', function () {
      // Redirect to the "Tech" section when the button is clicked
      window.location.href = 'tech.html';
    });
  });
      
  
});
