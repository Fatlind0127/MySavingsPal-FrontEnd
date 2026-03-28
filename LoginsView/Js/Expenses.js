// DOM Elements
const expenseForm = document.getElementById('expenseForm');
const expenseTableBody = document.getElementById('expenseTableBody');
const budgetRemaining = document.getElementById('budgetRemaining');
const progressBar = document.getElementById('progressBar');
const filterCategory = document.getElementById('filterCategory');
const filterDate = document.getElementById('filterDate');
const applyFilters = document.getElementById('applyFilters');
const summaryList = document.getElementById('summaryList');
const exportCsv = document.getElementById('exportCsv');

// Variables
let totalBudget = 500; // Set your budget
let expenses = [];

// Add Expense
expenseForm.addEventListener('submit', function (e) {
  e.preventDefault();
  const amount = document.getElementById('expenseAmount').value;
  const category = document.getElementById('expenseCategory').value;
  const description = document.getElementById('expenseDescription').value;

  const expense = {
    amount: parseFloat(amount),
    category,
    description: description || '-',
    date: new Date().toLocaleDateString(),
  };

  expenses.push(expense);
  updateExpenses();
  expenseForm.reset();
});

// Update Expenses and Summary
function updateExpenses() {
  // Clear table
  expenseTableBody.innerHTML = '';

  // Add rows
  let totalSpent = 0;
  expenses.forEach((expense, index) => {
    const row = document.createElement('tr');
    row.innerHTML = `
      <td>$${expense.amount.toFixed(2)}</td>
      <td>${expense.category}</td>
      <td>${expense.description}</td>
      <td>${expense.date}</td>
      <td><button onclick="deleteExpense(${index})">Delete</button></td>
    `;
    expenseTableBody.appendChild(row);
    totalSpent += expense.amount;
  });

  // Update budget
  const remaining = totalBudget - totalSpent;
  budgetRemaining.textContent = remaining.toFixed(2);
  progressBar.style.width = `${(totalSpent / totalBudget) * 100}%`;

  // Update summary
  updateSummary();
}

// Update Summary
function updateSummary() {
  const summary = {};
  expenses.forEach((expense) => {
    summary[expense.category] = (summary[expense.category] || 0) + expense.amount;
  });

  summaryList.innerHTML = '';
  for (const [category, total] of Object.entries(summary)) {
    const item = document.createElement('li');
    item.textContent = `${category}: $${total.toFixed(2)}`;
    summaryList.appendChild(item);
  }
}

// Delete Expense
function deleteExpense(index) {
  expenses.splice(index, 1);
  updateExpenses();
}

// Export to CSV
exportCsv.addEventListener('click', function () {
  const csv = ['Amount,Category,Description,Date'];
  expenses.forEach((expense) => {
    csv.push(`${expense.amount},${expense.category},${expense.description},${expense.date}`);
  });
  const blob = new Blob([csv.join('\n')], { type: 'text/csv' });
  const url = URL.createObjectURL(blob);
  const link = document.createElement('a');
  link.href = url;
  link.download = 'expenses.csv';
  link.click();
});
