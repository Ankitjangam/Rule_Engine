// Variables to store rules and combined rules
let ruleList = [];
let combinedRule = "";

// Show Notification Function
function showNotification(message, isSuccess = true) {
    const notificationDiv = document.getElementById('notification');
    notificationDiv.textContent = message;
    notificationDiv.className = isSuccess ? 'notification success' : 'notification error';
    notificationDiv.style.display = 'block';
    setTimeout(() => {
        notificationDiv.style.display = 'none';
    }, 3000);
}

// Clear Input Fields
function clearInputs() {
    document.getElementById('rule').value = '';
    document.getElementById('age').value = '';
    document.getElementById('department').value = '';
}

// Create Rule Function
document.getElementById('createRuleBtn').addEventListener('click', function () {
    const rule = document.getElementById('rule').value.trim();
    if (rule) {
        fetch('http://localhost:8080/api/rules/create', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(rule)
        })
        .then(response => {
            if (!response.ok) {
                throw new Error('Failed to create rule');
            }
            return response.json();
        })
        .then(data => {
            ruleList.push(data.rule);
            clearInputs();
            showNotification("Rule added: " + data.rule);
        })
        .catch(error => {
            showNotification("Error adding rule: " + error.message, false);
        });
    } else {
        showNotification("Please enter a valid rule", false);
    }
});

// Combine Rules Function
document.getElementById('combineRulesBtn').addEventListener('click', function () {
    if (ruleList.length > 0) {
        fetch('http://localhost:8080/api/rules/combine', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(ruleList)
        })
        .then(response => {
            if (!response.ok) {
                throw new Error('Failed to combine rules');
            }
            return response.text();
        })
        .then(data => {
            combinedRule = data;
            document.getElementById('combinedRules').value = combinedRule;
            showNotification("Rules combined successfully");
        })
        .catch(error => {
            showNotification("Error combining rules: " + error.message, false);
        });
    } else {
        showNotification("No rules to combine", false);
    }
});

// Evaluate Rule Function
document.getElementById('evaluateBtn').addEventListener('click', function () {
    const age = document.getElementById('age').value.trim();
    const department = document.getElementById('department').value.trim();

    if (!combinedRule) {
        showNotification("No combined rule to evaluate", false);
        return;
    }

    const userData = {
        age: parseInt(age),
        department: department,
        // You can add more fields if needed
    };

    fetch(`http://localhost:8080/api/rules/evaluate?combinedRule=${encodeURIComponent(combinedRule)}`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(userData)
    })
    .then(response => {
        if (!response.ok) {
            throw new Error('Failed to evaluate rule');
        }
        return response.json();
    })
    .then(result => {
        document.getElementById('result').textContent = result ? "True" : "False";
    })
    .catch(error => {
        showNotification("Error evaluating rule: " + error.message, false);
    });
});
