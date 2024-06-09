const createBtn = document.querySelector("button[data-create]");
const destroyBtn = document.querySelector("button[data-destroy]");
const amountInput = document.querySelector("input[type=number]");
const mainBoxes = document.querySelector('div#boxes');

createBtn.addEventListener("click", () => {
  createBoxes(amountInput.value);
});

destroyBtn.addEventListener("click", () => {
    destroyBoxes();
});

function destroyBoxes()
{
    mainBoxes.innerHTML = "";
}

function createBoxes(amount) {
    amount = parseInt(amount);
    if (amount >= 1 && amount <= 100) {
        destroyBoxes();
        for (let i = 1; i <= amount; i++){
            let div = document.createElement("div");
            div.style.backgroundColor = getRandomHexColor();
            div.style.width = 30 + (i * 10) + 'px';
            div.style.height = 30 + (i * 10) + 'px';
            mainBoxes.append(div);
        }
        amountInput.value = '';
    }
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}