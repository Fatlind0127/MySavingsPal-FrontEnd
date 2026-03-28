// preloader


// scroll

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



// Add any JavaScript functionality if needed here
document.getElementById("login").addEventListener("click", function() {
    alert("Login button clicked");
});

document.getElementById("register").addEventListener("click", function() {
    alert("Register button clicked");
});



