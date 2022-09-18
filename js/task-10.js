const getRandomHexColor = () => `#${Math.floor(Math.random() * 16777215).toString(16)}`;

const inputNum = document.querySelector('#controls>input');
const boxes = document.querySelector('#boxes');

const createBoxes = quantity => {
  const elementsToAdd = [];
  for (let i = 0; i < quantity; i++) {
    const div = document.createElement('div');
    div.style.height = `${30 + 10 * i}px`;
    div.style.width = `${30 + 10 * i}px`;
    div.style.background = getRandomHexColor();
    elementsToAdd.push(div);
  }
  return elementsToAdd;
};

document
  .querySelector('[data-create]')
  .addEventListener('click', () => boxes.append(...createBoxes(inputNum.value)));
document.querySelector('[data-destroy]').addEventListener('click', () => (boxes.innerHTML = ''));
