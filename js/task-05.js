const inputName = document.querySelector('#name-input');
const outputName = document.querySelector('#name-output');
console.log('~ outputName', outputName)
inputName.addEventListener('input', event => {
  outputName.textContent = event.currentTarget.value
});
