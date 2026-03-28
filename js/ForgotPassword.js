// Check if the email exists and update the password in localStorage
document.getElementById('forgot-password-form').addEventListener('submit', function (e) {
    e.preventDefault(); // Prevent form submission

    const email = document.getElementById('email').value;
    const newPassword = document.getElementById('new-password').value;

    // Get the stored users from local storage
    const users = JSON.parse(localStorage.getItem('users')) || [];

    // Find the user by email
    const user = users.find(user => user.email === email);

    if (user) {
        // Update the password
        user.password = newPassword;

        // Save the updated users array back to localStorage
        localStorage.setItem('users', JSON.stringify(users));

        alert('Password has been reset successfully.');
    } else {
        alert('Email not found.');
    }
});
