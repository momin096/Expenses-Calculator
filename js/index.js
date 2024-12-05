


// add eventListener for calculate button
document.getElementById('calculate').addEventListener('click', function () {
    // Input Values 
    const income = getInputValueById('income');
    const software = getInputValueById('software');
    const courses = getInputValueById('courses');
    const internet = getInputValueById('internet');

    // Calculation
    const totalExpenses = software + courses + internet;
    const balance = income - totalExpenses;

    /* Set Results */
    // set total expenses
    document.getElementById('total-expenses').innerText = totalExpenses.toFixed(2);
    // set balance 
    document.getElementById('balance').innerText = balance.toFixed(2);

    // show result section
    document.getElementById('results').classList.remove('hidden');
});




// addEventListener for savings button
document.getElementById('calculate-savings').addEventListener('click', function () {
    const savingsInput = getInputValueById('savings');

    // Input Values 
    const income = getInputValueById('income');
    const software = getInputValueById('software');
    const courses = getInputValueById('courses');
    const internet = getInputValueById('internet');
    

    const totalExpenses = software + courses + internet;
    const balance = income - totalExpenses;

    const savingAmount = (balance * savingsInput) / 100;

    // set savings 
    document.getElementById('savings-amount').innerText = savingAmount;

    const remainingBalance = balance - savingAmount;

    // set remaining balance 
    document.getElementById('remaining-balance').innerText = remainingBalance;

    
})