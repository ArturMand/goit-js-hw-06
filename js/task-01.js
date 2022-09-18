
const totalCategories = document.querySelectorAll(".item");

const categoriesArray = [...totalCategories]
  .map(
    categories => `Category: ${categories.children[0].textContent}
    Elements: ${categories.children[1].children.length}`
  )
  .join("\n");
console.log(`Number of categories: ${totalCategories.length}`);
console.log(categoriesArray);


/*
 totalCategories.forEach(item => {
   console.log(`Category: ${item.firstElementChild.textContent}`);
   console.log(`Elements: ${item.lastElementChild.children.length}`)
 });
*/