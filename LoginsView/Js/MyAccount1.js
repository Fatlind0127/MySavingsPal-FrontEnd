// kjo eshte skripta e cila merr te dhena nga local storage dhe i shfaq ato ne carden te cilen e kam vendosur ne myacc.html



// Function to load user data from localStorage and populate the page
function loadUserData() {
    const username = localStorage.getItem('username');
    const name = localStorage.getItem('name');
    const surname = localStorage.getItem('surname');
    const email = localStorage.getItem('email');
    const password = localStorage.getItem('password');

    // Populate the fields with the data from localStorage
    if (username) document.querySelector('#sidebar-username').value = username;
    if (name) document.querySelector('#sidebar-name').value = name;
    if (surname) document.querySelector('#sidebar-surname').value = surname;
    if (email) document.querySelector('#sidebar-email').value = email;
    if (password) document.querySelector('#sidebar-password').value = password;

    // Display username in the welcome section
    if (username) document.querySelector('.user-name').textContent = username;
}

// Function to save changes to localStorage
function saveChanges() {
    const username = document.querySelector('#sidebar-username').value;
    const name = document.querySelector('#sidebar-name').value;
    const surname = document.querySelector('#sidebar-surname').value;
    const email = document.querySelector('#sidebar-email').value;
    const password = document.querySelector('#sidebar-password').value;

    // Save the values to localStorage
    localStorage.setItem('username', username);
    localStorage.setItem('name', name);
    localStorage.setItem('surname', surname);
    localStorage.setItem('email', email);
    localStorage.setItem('password', password);

    alert("Changes saved successfully!");
}

// Toggle sidebar sections when clicked
function setupSidebarToggle() {
    const sidebarItems = document.querySelectorAll('.unique-sidebar-menu li');
    
    sidebarItems.forEach(item => {
        item.addEventListener('click', function() {
            // Hide all sections
            const sections = document.querySelectorAll('.unique-section-content');
            sections.forEach(section => section.style.display = 'none');
            
            // Show the corresponding section
            const sectionId = item.getAttribute('data-section');
            const section = document.getElementById(sectionId);
            if (section) {
                section.style.display = 'block';
            }
        });
    });
}

// Initialize the dashboard
function initializeDashboard() {
    // Load user data on page load
    loadUserData();

    // Set up the sidebar toggle functionality
    setupSidebarToggle();

    // Set up save button functionality
    document.querySelector('#save-sidebar-changes').addEventListener('click', saveChanges);
}

// Initialize when the DOM is ready
document.addEventListener('DOMContentLoaded', initializeDashboard);
