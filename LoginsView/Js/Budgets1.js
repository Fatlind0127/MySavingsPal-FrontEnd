let totalBudget = 0;
const transactionHistory = document.getElementById('transaction-history');

const updateBudget = () => {
    document.getElementById('total-budget').textContent = `Remaining Budget: $${totalBudget}`;
    updateChart();
};

const addIncome = () => {
    const income = parseFloat(document.getElementById('income-input').value);
    const category = document.getElementById('income-category').value;
    if (!isNaN(income) && income > 0) {
        totalBudget += income;
        addToHistory(income, category, 0, "", 0, "");
        updateBudget();
    }
};

const addExpense = () => {
    const expense = parseFloat(document.getElementById('expense-input').value);
    const category = document.getElementById('expense-category').value;
    if (!isNaN(expense) && expense > 0) {
        totalBudget -= expense;
        addToHistory(0, "", expense, category, 0, "");
        updateBudget();
    }
};

const addSavings = () => {
    const savings = parseFloat(document.getElementById('savings-input').value);
    const category = document.getElementById('savings-category').value;
    if (!isNaN(savings) && savings > 0) {
        totalBudget -= savings;
        addToHistory(0, "", 0, "", savings, category);
        updateBudget();
    }
};

const addToHistory = (income, incomeCategory, expense, expenseCategory, savings, savingsCategory) => {
    const row = document.createElement('tr');
    row.innerHTML = `
        <td>$${income}</td>
        <td>${incomeCategory}</td>
        <td>$${expense}</td>
        <td>${expenseCategory}</td>
        <td>$${savings}</td>
        <td>${savingsCategory}</td>
        <td>$${totalBudget}</td>
    `;
    transactionHistory.appendChild(row);
};

const updateChart = () => {
    const data = {
        labels: ['Income', 'Expenses', 'Savings'],
        datasets: [{
            data: [
                Array.from(transactionHistory.querySelectorAll('tr')).reduce((a, b) => a + parseFloat(b.cells[0].textContent.replace('$', '')), 0),
                Array.from(transactionHistory.querySelectorAll('tr')).reduce((a, b) => a + parseFloat(b.cells[2].textContent.replace('$', '')), 0),
                Array.from(transactionHistory.querySelectorAll('tr')).reduce((a, b) => a + parseFloat(b.cells[4].textContent.replace('$', '')), 0),
            ],
            backgroundColor: ['#36a2eb', '#ff6384', '#4bc0c0'],
        }],
    };

    if (window.budgetChart) window.budgetChart.destroy();
    const ctx = document.getElementById('budget-chart').getContext('2d');
    window.budgetChart = new Chart(ctx, {
        type: 'pie',
        data,
    });
};

updateBudget();