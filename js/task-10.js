function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const boxes = document.querySelector(`#boxes`);
const input = document.querySelector(`input`);
const create = document.querySelector(`button[data-create]`);
const destroy = document.querySelector(`button[data-destroy]`);
destroy.setAttribute(`disabled`, true);

destroy.addEventListener(`click`, () => {
  destroyBoxes();
  input.value = "";
  destroy.setAttribute(`disabled`, true);
});

create.addEventListener(`click`, () => {
  let amount = input.value;
  if (amount) {
    destroy.removeAttribute(`disabled`);
  }
  createBoxes(amount);
});

function destroyBoxes() {
  boxes.innerHTML = "";
}

function createBoxes(amount) {
  const newBox = [];
  if (!amount) {
    return;
  }

  for (let index = 1; index <= amount; index++) {
    const box = document.createElement("div");
    const collor = getRandomHexColor();
    box.style.backgroundColor = collor;
    box.style.width = 30 + 10 * (index - 1) + `px`;
    box.style.height = 30 + 10 * (index - 1) + `px`;

    newBox.push(box);
  }
  boxes.append(...newBox);
  input.value = "";
}
