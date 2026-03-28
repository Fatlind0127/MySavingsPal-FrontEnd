// Check if the user is logged in
const loggedIn = localStorage.getItem("loggedIn");

if (!loggedIn) {
  // Redirect to login page if not logged in
  window.location.href = "../login.html";
} else {
  // Parse the user data and display the username
  const user = JSON.parse(localStorage.getItem("user"));
  document.getElementById("usernameDisplay").textContent = user.name || "Guest";
}

// Logout button functionality
document.getElementById("logout-button").addEventListener("click", function () {
  localStorage.removeItem("loggedIn");
  localStorage.removeItem("user");
  window.location.href = "../../index.html"; // Redirect to home page
});