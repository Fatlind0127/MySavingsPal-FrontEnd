document.getElementById("registerForm").addEventListener("submit", function (event) {
  event.preventDefault();
  
  const username = document.getElementById("username").value;
  const name = document.getElementById("name").value;
  const surname = document.getElementById("surname").value;
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;
  const birthDate = document.getElementById("birthDate").value;

  // Check if email ends with @gmail.com
  if (!email.endsWith("@gmail.com")) {
    alert("Please enter a valid Gmail address (must end with @gmail.com).");
    return; // Stop form submission
  }

  // Email format validation (optional but recommended)
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    alert("Please enter a valid email address.");
    return; // Stop form submission
  }

  // Proceed with registration if email is valid
  localStorage.setItem("username", username);
  localStorage.setItem("name", name);
  localStorage.setItem("surname", surname);
  localStorage.setItem("email", email);
  localStorage.setItem("password", password);
  localStorage.setItem("birthDate", birthDate);

  // Set registration success flag
  localStorage.setItem("registrationSuccess", "true");

  // Redirect to login page
  window.location.href = "login.html";
});
