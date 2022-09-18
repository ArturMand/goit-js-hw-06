const btnDecrement = document.querySelector('button[data-action="decrement"]');
const btnIncrement = document.querySelector('button[data-action="increment"]');
const counter = document.querySelector('#value');

let counterValue = 0;

btnIncrement.addEventListener('click', () => {
  counterValue += 1;
  counter.textContent = counterValue;
});

btnDecrement.addEventListener('click', () => {
  counterValue -= 1;
  counter.textContent = counterValue;
});



/*
let counterValue = 0;


document.querySelector('button[data-action="decrement"]').addEventListener('click', () => {
  counterValue += 1;
  document.querySelector('#value').textContent = counterValue;
});
document.querySelector('button[data-action="increment"]').addEventListener('click', () => {
  counterValue -= 1;
  document.querySelector('#value').textContent = counterValue;
});
*/
