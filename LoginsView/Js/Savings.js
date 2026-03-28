// ketu eshte funksionaliteti i kontentit  expenses, kurse i funksionaliteti i nav barit esjte i marrur nga Butgeds.js //
//shkaku se i kam ndare keshtu eshte se kirjohet konflikt mes funklsionalitetit te local storage te navbarit me funksionalitetin e contentit qe po e vendos!!!


document.addEventListener("DOMContentLoaded", () => {
    const savingsForm = document.getElementById("add-savings-form");
    const savingsRows = document.getElementById("savings-rows");
    const totalSavingsEl = document.getElementById("total-savings");
    const monthlyGoalEl = document.getElementById("monthly-goal");
    const savingsProgressEl = document.getElementById("savings-progress");

    const ctx = document.getElementById("savingsPieChart").getContext("2d");
    const savingsChart = new Chart(ctx, {
        type: "pie",
        data: {
            labels: [],
            datasets: [{
                data: [],
                backgroundColor: []
            }]
        },
        options: {
            responsive: true,
            plugins: {
                legend: {
                    position: "top",
                }
            }
        }
    });

    let totalSavings = 0;
    let monthlyGoal = 1000; // Vendosni qëllimin mujor të paracaktuar
    monthlyGoalEl.textContent = `$${monthlyGoal}`;

    // Funksioni për gjenerimin e ngjyrave të rastësishme
    function generateRandomColor() {
        const letters = "0123456789ABCDEF";
        let color = "#";
        for (let i = 0; i < 6; i++) {
            color += letters[Math.floor(Math.random() * 16)];
        }
        return color;
    }

    // Përllogaritja dhe përditësimi i progresit
    function updateProgress() {
        const progress = (totalSavings / monthlyGoal) * 100;
        savingsProgressEl.textContent = `${progress.toFixed(2)}%`;
    }

    // Shto të dhënat në tabelë dhe grafikun
    savingsForm.addEventListener("submit", (event) => {
        event.preventDefault();

        const category = document.getElementById("savings-category").value.trim();
        const amount = parseFloat(document.getElementById("savings-amount").value);
        const goal = parseFloat(document.getElementById("savings-goal").value);

        if (category && !isNaN(amount) && amount > 0 && !isNaN(goal) && goal > 0) {
            // Shto të dhënat në tabelë
            const row = document.createElement("tr");
            const progress = ((amount / goal) * 100).toFixed(2);
            row.innerHTML = `
                <td>${category}</td>
                <td>$${amount.toFixed(2)}</td>
                <td>$${goal.toFixed(2)}</td>
                <td>${progress}%</td>
                <td><button class="btn-delete">Delete</button></td>
            `;
            savingsRows.appendChild(row);

            // Përditëso totalin e kursimeve
            totalSavings += amount;
            totalSavingsEl.textContent = `$${totalSavings.toFixed(2)}`;

            // Përditëso grafikun
            const existingIndex = savingsChart.data.labels.indexOf(category);
            if (existingIndex >= 0) {
                savingsChart.data.datasets[0].data[existingIndex] += amount;
            } else {
                savingsChart.data.labels.push(category);
                savingsChart.data.datasets[0].data.push(amount);
                savingsChart.data.datasets[0].backgroundColor.push(generateRandomColor());
            }
            savingsChart.update();

            // Përditëso progresin
            updateProgress();

            // Pastro fushat e formës
            savingsForm.reset();
        } else {
            alert("Ju lutemi plotësoni të gjitha fushat me vlera të vlefshme.");
        }
    });

    // Funksionaliteti për fshirjen e rreshtave
    savingsRows.addEventListener("click", (event) => {
        if (event.target.classList.contains("btn-delete")) {
            const row = event.target.closest("tr");
            const amount = parseFloat(row.children[1].textContent.replace("$", ""));
            const category = row.children[0].textContent;

            // Përditëso totalin e kursimeve
            totalSavings -= amount;
            totalSavingsEl.textContent = `$${totalSavings.toFixed(2)}`;

            // Përditëso grafikun
            const categoryIndex = savingsChart.data.labels.indexOf(category);
            if (categoryIndex >= 0) {
                savingsChart.data.datasets[0].data[categoryIndex] -= amount;
                if (savingsChart.data.datasets[0].data[categoryIndex] <= 0) {
                    savingsChart.data.labels.splice(categoryIndex, 1);
                    savingsChart.data.datasets[0].data.splice(categoryIndex, 1);
                    savingsChart.data.datasets[0].backgroundColor.splice(categoryIndex, 1);
                }
                savingsChart.update();
            }

            // Përditëso progresin
            updateProgress();

            // Hiq rreshtin nga tabela
            row.remove();
        }
    });
});
