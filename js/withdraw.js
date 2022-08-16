document.getElementById('btn-withdraw').addEventListener('click', function () {
  //   get withdraw amount from withdraw input field
  const withdrawElement = document.getElementById('withdraw');
  const newWithdrawAmount = parseFloat(withdrawElement.value);

  //clear input field
  withdrawElement.value = '';

  if (isNaN(newWithdrawAmount)) {
    alert('Provide valid amount.');
    return;
  }

  //   get previous withdrawal amount
  const previousWithdrawElement = document.getElementById('withdraw-total');
  const previousWithdraw = parseFloat(previousWithdrawElement.innerText);

  //   calculate total balance
  const balanceElement = document.getElementById('total');
  let balance = parseFloat(balanceElement.innerText);

  if (newWithdrawAmount > balance) {
    alert('Insufficient funds!');
    return;
  }

  //   calculate total withdraw amount
  const currentWithdraw = newWithdrawAmount + previousWithdraw;
  previousWithdrawElement.innerText = currentWithdraw;

  balance -= newWithdrawAmount;
  balanceElement.innerText = balance;
});
