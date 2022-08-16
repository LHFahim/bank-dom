document.getElementById('btn-deposit').addEventListener('click', function () {
  //   get deposit amount from input
  let deposit = document.getElementById('deposit');
  let newDeposit = parseFloat(deposit.value);

  //   get total deposit amount
  let depositElement = document.getElementById('deposit-total');
  let previousDeposit = depositElement.innerText;
  previousDeposit = parseFloat(previousDeposit);

  //   add numbers to set deposit
  let currentDeposit = newDeposit + previousDeposit;

  //   set deposit total
  depositElement.innerText = currentDeposit;

  //   update balance
  const balanceElement = document.getElementById('total');
  let balanceString = balanceElement.innerText;
  let balance = parseFloat(balanceString);

  // calculate current total balance
  const total = balance + newDeposit;

  balanceElement.innerText = total;

  deposit.value = '';
});
