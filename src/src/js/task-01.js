const ulCategories = document.querySelectorAll(`#categories li.item`);
console.log(`Number of categories: ${ulCategories.length}`);

const title = [...document.querySelectorAll(".item > h2")];
for (let i = 0; i < title.length; i++) {
  console.log(`Category: ${title[i].textContent}`);
  const titleSiblingList = title[i].nextElementSibling;
  console.log(`Elements: ${titleSiblingList.childElementCount}`);
}
