// Kontrollimi i userit nqoftese ai eshte i logun
const loggedIn = localStorage.getItem("loggedIn");

if (!loggedIn) {
  // Qasja ne login page direkt nese userit i deshton logini
  window.location.href = "login.html";
} else {
  // Marrja e te dhenave ndaj userit prej localStorage "databazes" dhe e shfaqur ne poziten ku ne deshirojm
  const user = JSON.parse(localStorage.getItem("user"));
  document.getElementById("usernameDisplay").textContent = user.name || "Guest";
}

// Sessioni i buttonit te logoutit i cili pasi qe behesh logout, edhe nese tenton te kthehesh prapa nuk lejon qe te futesh ne faqen paraprake pa u bere login edhe nje her
document.getElementById("logout-button").addEventListener("click", function () {
  localStorage.removeItem("loggedIn");
  localStorage.removeItem("user"); 
  window.location.href = "../../index.html"; // Pas logoutit qasja e vazhdueshme do te jet indexi 
});

// Navbar functionality for scroll
window.addEventListener("scroll", function() {
  var navbar = document.querySelector(".navbar");
  var scrollPosition = window.scrollY;

  if (scrollPosition > 50) {
    navbar.classList.add("smaller");
  } else {
    navbar.classList.remove("smaller");  // In the moment you scroll and pass 50px, navbar gets smaller
  }
});

// Mobile Menu Toggle Functionality
const menuToggle = document.querySelector(".menu-toggle");
const navbarMenu = document.querySelector(".navbar-menu");

menuToggle.addEventListener("click", function() {
  navbarMenu.classList.toggle("active"); // Toggles the menu visibility on mobile
});


// data 

