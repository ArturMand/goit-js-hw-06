const numberInput = document.querySelector('#validation-input');

numberInput.addEventListener('blur', event => {
  const inputLength = event.target.value.length;
  const verificationNumber = Number(numberInput.getAttribute('data-length'));
  if (inputLength === verificationNumber) {
    numberInput.classList.remove('invalid');
    numberInput.classList.add('valid');
  }
  if (inputLength !== verificationNumber) {
    numberInput.classList.remove('valid');
    numberInput.classList.add('invalid');
  }
});
