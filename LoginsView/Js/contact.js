// kontrollimi i userit nqoftese ai eshte i logun
const loggedIn = localStorage.getItem("loggedIn");

if (!loggedIn) {
  // qasja ne login page direkte nese userit i deshton logini
  window.location.href = "login.html";
} else {
  // marrja e te dhenave ndaj userit prej localstoragit "databazes" dhe e shfaqur ne poziten ku ne deshirojm
  const user = JSON.parse(localStorage.getItem("user"));
  document.getElementById("usernameDisplay").textContent = user.name || "Guest";
}

// sessioni i buttonit te logoutit i cili pasi qe behesh logout, edhe nese tenton te kthehesh prapa nuk lejon qe te futesh ne faqen paraprake pa u bere login edhe nje her
document.getElementById("logout-button").addEventListener("click", function () {
  localStorage.removeItem("loggedIn");
  localStorage.removeItem("user"); 
  window.location.href = "../../index.html"; // pas logoutit qasja e vazhdueshme do te jet indexi 
});



// navbar
window.addEventListener("scroll", function() {
    var navbar = document.querySelector(".navbar");
    var scrollPosition = window.scrollY;

    if (scrollPosition > 50) {
        navbar.classList.add("smaller");
    } else {
        navbar.classList.remove("smaller");  //ne momentin qe ben scroll dhe kalon 50px te posht navbar behet me e vogel 
    }
});

/* Mobile Menu Toggle Functionality */
const menuToggle = document.querySelector(".menu-toggle");
const navbarMenu = document.querySelector(".navbar-menu");

menuToggle.addEventListener("click", function() {
    navbarMenu.classList.toggle("active"); // Toggles the menu visibility on mobile
});
