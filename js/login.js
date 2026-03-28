document.getElementById("loginForm").addEventListener("submit", function (event) {
  event.preventDefault();
  const identifier = document.getElementById("loginIdentifier").value; // Can be email or username
  const password = document.getElementById("loginPassword").value;

  // Get stored credentials
  const storedEmail = localStorage.getItem("email");
  const storedUsername = localStorage.getItem("username");
  const storedPassword = localStorage.getItem("password");

  // Validate credentials: check if identifier matches either email or username
  if ((identifier === storedEmail || identifier === storedUsername) && password === storedPassword) {
    // Set "logged in" flag and user info
    localStorage.setItem("loggedIn", "true");
    localStorage.setItem("user", JSON.stringify({ name: storedUsername || storedEmail }));

    // Redirect to user page
    window.location.href = "userPage.html";
  } else {
    alert("Invalid email/username or password");
  }
});

// Check for registration success message
document.addEventListener("DOMContentLoaded", function () {
  const messageContainer = document.getElementById("success-message");

  if (localStorage.getItem("registrationSuccess") === "true") {
    messageContainer.textContent = "Registration successful! You can now log in.";
    messageContainer.style.display = "block";
    localStorage.removeItem("registrationSuccess");
  }
});

// Google login
function handleCredentialResponse(response) {
  console.log("Encoded JWT ID token: " + response.credential);

  // Decode the ID token (optional but useful for validation and debugging)
  const payload = parseJwt(response.credential);
  console.log("User Info: ", payload);

  // Save user info and login status
  localStorage.setItem("user", JSON.stringify(payload));
  localStorage.setItem("loggedIn", "true");

  alert(`Welcome, ${payload.name}!`);
  window.location.href = "userPage.html";
}

// Function to decode JWT for debugging
function parseJwt(token) {
  const base64Url = token.split(".")[1];
  const base64 = base64Url.replace(/-/g, "+").replace(/_/g, "/");
  const jsonPayload = decodeURIComponent(
    atob(base64)
      .split("")
      .map(function (c) {
        return "%" + ("00" + c.charCodeAt(0).toString(16)).slice(-2);
      })
      .join("")
  );
  return JSON.parse(jsonPayload);
}
