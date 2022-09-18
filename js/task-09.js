const  getRandomHexColor = () => `#${Math.floor(Math.random() * 16777215).toString(16)}`;

document.querySelector('button.change-color').addEventListener('click', () => {
  const color = getRandomHexColor();
  document.querySelector('body').style.backgroundColor = color;
  document.querySelector('span.color').textContent = color;
});
