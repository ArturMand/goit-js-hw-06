const getValueInput = document.querySelector('#font-size-control');

const magicText = document.querySelector('#text');

getValueInput.oninput = function () {
  magicText.style.fontSize = getValueInput.value + 'px';
};
