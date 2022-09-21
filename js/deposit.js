// step 1 
document.getElementById('btn-deposit').addEventListener('click', function () {
    // get the deposit from deposit inputField 
    const depositField = document.getElementById('deposit-input');

    const depositAmount = depositField.value;
    const newDepositAmountInt = parseFloat(depositAmount);
    console.log(depositAmount);
    // step 3 get the current deposit total 
    const depositTotalElement = document.getElementById('deposit-total');
    const depositTotal = depositTotalElement.innerText;
    const newDepositTotal = parseFloat(depositTotal);

    // step 4 
    const currentDepositToetal = newDepositTotal + newDepositAmountInt;
    depositTotalElement.innerText = currentDepositToetal;

    // step 5 
    const balanceTotalElement = document.getElementById('balance-total');
    const previousBalanceTotalString = balanceTotalElement.innerText;
    const previousBalanceTotal = parseFloat(previousBalanceTotalString);

    // step 6 
    const currentbalanceTotal = previousBalanceTotal + newDepositAmountInt;
    balanceTotalElement.innerText = currentbalanceTotal;

     
    // clear the deposit field 
    depositField.value = '';

})