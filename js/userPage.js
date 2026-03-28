
// Check if the user is logged in
const loggedIn = localStorage.getItem("loggedIn");

if (!loggedIn) {
  // Redirect to login page if not logged in
  window.location.href = "login.html";
} else {
  // Parse the user data and display the username
  const user = JSON.parse(localStorage.getItem("user"));
  document.getElementById("usernameDisplay").textContent = user.name || "Guest";
}

// Logout button functionality
document.getElementById("logout-button").addEventListener("click", function () {
  localStorage.removeItem("loggedIn");
  localStorage.removeItem("user");
  window.location.href = "index.html"; // Redirect to home page
});


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




// content 
 // Example JavaScript to populate username dynamically from localStorage
 document.addEventListener('DOMContentLoaded', function() {
  const username = localStorage.getItem('username') || 'User';
  document.getElementById('welcome-message').innerText = `Welcome back, ${username}!`;
});

// Resize card widths dynamically for a larger layout
const cards = document.querySelectorAll('.card');
cards.forEach(card => {
  card.style.width = '300px';
  card.style.height = '200px';
});







