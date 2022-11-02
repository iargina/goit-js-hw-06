function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}


/* Завдання 10 (виконувати не обов'язково)
Напиши скрипт створення і очищення колекції елементів. Користувач вводить кількість елементів в input і натискає кнопку Створити, після чого рендериться колекція. 
Натисненням на кнопку Очистити, колекція елементів очищається.

<div id="controls">
  <input type="number" min="1" max="100" step="1" />
  <button type="button" data-create>Create</button>
  <button type="button" data-destroy>Destroy</button>
</div>

<div id="boxes"></div>

Створи функцію createBoxes(amount), яка приймає один параметр - число. Функція створює стільки <div>, скільки вказано в amount і додає їх у div#boxes.

Розміри найпершого <div> - 30px на 30px.
Кожен елемент після першого повинен бути ширшим і вищим від попереднього на 10px.
Всі елементи повинні мати випадковий колір фону у форматі HEX. Використовуй готову функцію getRandomHexColor для отримання кольору.


Створи функцію destroyBoxes(), яка очищає вміст div#boxes, у такий спосіб видаляючи всі створені елементи. */

const boxes = document.querySelector(`#boxes`);
const newBox = []
const input = document.querySelector(`input`)
const create = document.querySelector(`button[data-create]`)


const destroy = document.querySelector(`button[data-destroy]`)
destroy.setAttribute(`disabled`, true)
destroy.addEventListener(`click`, ()=>{
  destroyBoxes()
  destroy.setAttribute(`disabled`, true)
})

create.addEventListener(`click`, ()=>{
  destroy.removeAttribute(`disabled`)
  const amount = input.value
  createBoxes(amount);
})

function destroyBoxes() {
    while (boxes.firstChild) {
      boxes.removeChild(boxes.firstChild);
    }
    const newBox = []
  input.value =``
}

function createBoxes(amount) {
for (let index = 1; index <= amount ; index++) {
  const box = document.createElement("div");
  const collor = getRandomHexColor();
  box.style.backgroundColor = collor;
  console.log(box);
  if(index!==1) {
    const width = 30+10*(index-1)
    box.style.width = width +`px`
    const height = 30+10*(index-1)
    box.style.height = width +`px`
  }
  if(index===1) {
    box.style.width = `30px`
    box.style.height = `30px`
  }
  newBox.push(box);
}
boxes.append(...newBox); 
input.value =``
console.log(boxes);
}

