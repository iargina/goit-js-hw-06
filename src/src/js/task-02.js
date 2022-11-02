const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

const list = document.querySelector("#ingredients");
const listItems = [];
for (let i = 0; i < ingredients.length; i++) {
  const listItem = document.createElement("li");
  listItem.textContent = ingredients[i];
  listItem.classList.add("item");
  listItems.push(listItem);
}
list.append(...listItems);
