function getInputValueById(elementId) {
    const incomeField = document.getElementById(elementId);
    const incomeFieldString = incomeField.value;
    const totalIncome = parseFloat(incomeFieldString);
    totalIncome.value = '';
    return totalIncome;
}
function getInputFieldValueById(elementId, newValue) {
    const totalExpenseField = document.getElementById(elementId);
    totalExpenseField.innerText = newValue;
}

document.getElementById('btn-calc').addEventListener('click', function () {
    const totalIncome = getInputValueById('income-field');
    const foodAmount = getInputValueById('food-field');
    const rentAmount = getInputValueById('rent-field');
    const clothesAmount = getInputValueById('clothes-field');
    const saveAmount = getInputValueById('save-field');
    totalExpenseAmount = foodAmount + clothesAmount + rentAmount;
    const balanceAmount = totalIncome - totalExpenseAmount;
    getInputFieldValueById('total-expense', totalExpenseAmount)
    const balanceAmountLast = getInputFieldValueById('balance', balanceAmount)
});
document.getElementById('btn-save').addEventListener('click', function () {
    const savingAmountElement =  document.getElementById('save-amount');
    const totalIncome = getInputValueById('income-field');
    const saveAmount = getInputValueById('save-field');
    const savingAmount = totalIncome/(100/saveAmount);
    savingAmountElement.innerText = savingAmount; 

    const btElement = document.getElementById('balance');
    const btstring = btElement.innerText;
    const bt = parseFloat(btstring);

    const saElement = document.getElementById('save-amount');
    const sastring = saElement.innerText;
    const sa = parseFloat(sastring);
    const remainAmoubt = bt - sa;

    const remainElement = document.getElementById('remain-amount');
    remainElement.innerText = remainAmoubt;


})