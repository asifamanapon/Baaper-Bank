// step 1 
document.getElementById('btn-withdraw').addEventListener('click', function () {
    // step 2 get the withdraw amount from input field 
    const withdrawField = document.getElementById('withdraw-field');
    const newWithdrawAmountString = withdrawField.value;
    const newWithdrawAmount = parseFloat(newWithdrawAmountString);
    // step3 convert input string to number
    // get prevous withdraw total 
    const withdrawTotalElement = document.getElementById('withdraw-total');
    const previousWithdrawTotalString = withdrawTotalElement.innerText;
    const previousWithdrawTotal = parseFloat(previousWithdrawTotalString);

   
    // step 5.5 working on balance 
    const balanceTotalElement = document.getElementById('balance-total');
    const previousBalanceTotalString = balanceTotalElement.innerText;
    const previousBalanceTotal = parseFloat(previousBalanceTotalString);

    if (newWithdrawAmount > previousBalanceTotal) {
        alert('Bank e tk nai');
        return;
    }
    // claculate the balance total 
    const newBalanceTotal = previousBalanceTotal - newWithdrawAmount;
    balanceTotalElement.innerText = newBalanceTotal;

    // step 4
    // calculate the total withdrw 

    const currentWithdrawTotal = previousWithdrawTotal + newWithdrawAmount;

    // step 5 set total withdraw amount 
    withdrawTotalElement.innerText = currentWithdrawTotal;


    // step 7 clear the input field 
    withdrawField.value = '';
})