
const menuToggle = document.querySelector(".menu-toggle");
const navbarMenu = document.querySelector(".navbar-menu");
if (menuToggle && navbarMenu) {
    menuToggle.addEventListener("click", function () {
        navbarMenu.classList.toggle("active");
    });
}

document.getElementById('calculate-btn').addEventListener('click', function() {
    // Get input values
    const income = parseFloat(document.getElementById('income').value);
    const expenses = parseFloat(document.getElementById('expenses').value);
    const savingsGoal = parseFloat(document.getElementById('savings').value);
    const currency = document.getElementById('currency').value;

    // Simple validation
    if (isNaN(income) || isNaN(expenses) || isNaN(savingsGoal)) {
        alert('Please fill in all fields correctly.');
        return;
    }

    // Currency symbols based on selection
    const currencySymbols = {
        'USD': '$',
        'EUR': '€',
        'GBP': '£'
    };
    const currencySymbol = currencySymbols[currency];

    // Monthly calculations
    const remainingBalance = income - expenses;
    const achievableSavings = Math.min(remainingBalance, savingsGoal);

    // Yearly projections
    const yearlyIncome = income * 12;
    const yearlyExpenses = expenses * 12;
    const yearlyRemainingBalance = yearlyIncome - yearlyExpenses;
    const yearlyAchievableSavings = achievableSavings * 12;

    // Display the results (monthly and yearly breakdown)
    document.getElementById('remaining').textContent = `${currencySymbol}${remainingBalance.toFixed(2)} (Monthly), ${currencySymbol}${yearlyRemainingBalance.toFixed(2)} (Yearly)`;
    document.getElementById('savings-amount').textContent = `${currencySymbol}${achievableSavings.toFixed(2)} (Monthly), ${currencySymbol}${yearlyAchievableSavings.toFixed(2)} (Yearly)`;
    document.getElementById('result').style.display = 'block';

    // Add calculation to history
    addHistoryEntry(income, expenses, savingsGoal, remainingBalance, achievableSavings, yearlyIncome, yearlyExpenses, yearlyRemainingBalance, yearlyAchievableSavings, currencySymbol);
});

function addHistoryEntry(income, expenses, savings, remaining, achievableSavings, yearlyIncome, yearlyExpenses, yearlyRemaining, yearlyAchievable, currencySymbol) {
    const historyList = document.getElementById('history-list');

    // Create a new history entry div
    const historyEntry = document.createElement('div');
    historyEntry.className = 'history-entry';

    // Add details to the entry with monthly and yearly breakdowns
    historyEntry.innerHTML = `
        <p><strong>Monthly Income:</strong> ${currencySymbol}${income.toFixed(2)}</p>
        <p><strong>Monthly Expenses:</strong> ${currencySymbol}${expenses.toFixed(2)}</p>
        <p><strong>Monthly Savings Goal:</strong> ${currencySymbol}${savings.toFixed(2)}</p>
        <p><strong>Remaining Balance (Monthly):</strong> ${currencySymbol}${remaining.toFixed(2)}</p>
        <p><strong>Achievable Savings (Monthly):</strong> ${currencySymbol}${achievableSavings.toFixed(2)}</p><br>
        
        <p><strong>Yearly Income:</strong> ${currencySymbol}${yearlyIncome.toFixed(2)}</p>
        <p><strong>Yearly Expenses:</strong> ${currencySymbol}${yearlyExpenses.toFixed(2)}</p>
        <p><strong>Remaining Balance (Yearly):</strong> ${currencySymbol}${yearlyRemaining.toFixed(2)}</p>
        <p><strong>Achievable Savings (Yearly):</strong> ${currencySymbol}${yearlyAchievable.toFixed(2)}</p>
    `;

    // Append the entry to the history list
    historyList.appendChild(historyEntry);
}






// navbar 
window.addEventListener("scroll", function() {
    var navbar = document.querySelector(".navbar");
    var scrollPosition = window.scrollY;

    if (scrollPosition > 50) {
        navbar.classList.add("smaller");
    } else {
        navbar.classList.remove("smaller");
    }
});



// end navbar


// arrows
document.getElementById('arrow').addEventListener('click', function() {
    const warning = document.getElementById('warning');
    const arrow = document.getElementById('arrow');
  
    // Toggle the active class to slide in/out the warning
    warning.classList.toggle('active');
  
    // Rotate the arrow when clicked
    arrow.classList.toggle('rotate');
});

