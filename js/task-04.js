let counterValue = 0;
const minusButton = document.querySelector('button[data-action="decrement"]');
const plusButton = document.querySelector('button[data-action="increment"]');
const text = document.querySelector("#value");

minusButton.addEventListener(`click`, () => {
  counterValue -= 1;
  text.textContent = counterValue;
});

plusButton.addEventListener(`click`, () => {
  counterValue += 1;
  text.textContent = counterValue;
});
