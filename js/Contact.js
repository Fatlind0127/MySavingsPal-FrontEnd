window.addEventListener("scroll", function() {
    var navbar = document.querySelector(".navbar");
    var scrollPosition = window.scrollY;

    if (scrollPosition > 50) {
        navbar.classList.add("smaller");
    } else {
        navbar.classList.remove("smaller");
    }
});

/* Mobile Menu Toggle Functionality */
const menuToggle = document.querySelector(".menu-toggle");
const navbarMenu = document.querySelector(".navbar-menu");

menuToggle.addEventListener("click", function() {
    navbarMenu.classList.toggle("active"); // Toggles the menu visibility on mobile
});



// Function to check if the element is in viewport
function isInViewport(element) {
    const rect = element.getBoundingClientRect();
    return rect.top >= 0 && rect.bottom <= (window.innerHeight || document.documentElement.clientHeight);
  }
  
  // Add 'show' class to elements when they enter the viewport
  function checkScroll() {
    const elements = document.querySelectorAll('.animate');
    elements.forEach(el => {
      if (isInViewport(el)) {
        el.classList.add('show');
      }
    });
  }
  
  // Run on scroll
  window.addEventListener('scroll', checkScroll);
  
  // Run on page load
  window.addEventListener('load', checkScroll);



  document.getElementById('contactForm').addEventListener('submit', async function(event) {
    event.preventDefault();  // Prevent the default form submission behavior

    const form = event.target;
    const formData = new FormData(form);

    try {
        // Send the form data to Formspree
        const response = await fetch(form.action, {
            method: form.method,
            body: formData,
            headers: { 'Accept': 'application/json' }
        });

        if (response.ok) {
            alert("Email has been sent!");  // Display a confirmation popup
            form.reset();  // Clear the form fields
            window.location.redirect();  // Reload the page
        } else {
            alert("Oops! There was a problem submitting your form.");
        }
    } catch (error) {
        alert("Error: Unable to send email.");
    }
});

  