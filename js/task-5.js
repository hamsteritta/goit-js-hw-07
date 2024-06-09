const body = document.querySelector('body');
const changeBtn = document.querySelector('button.change-color');
const changeTxt = document.querySelector('span.color');

changeBtn.addEventListener("click", event => { 
  const randColor = getRandomHexColor();
  changeTxt.innerHTML = randColor;
  body.style.backgroundColor = randColor;
});

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
