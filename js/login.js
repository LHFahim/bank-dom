document.getElementById('btn-submit').addEventListener('click', function () {
  //   console.log('Submit button clicked.');

  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;

  if (email === 'user@email.com' && password === 'user') {
    console.log('Valid User');
  } else {
    alert('Invalid User');
  }
});
