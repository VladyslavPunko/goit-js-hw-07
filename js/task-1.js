
const categoriList = document.getElementById('categories');
const catogoriItem = categoriList.querySelectorAll('li.item');

console.log(`Number of categories: ${catogoriItem.length}`);

catogoriItem.forEach(category => {
const tittle = category.querySelector(`h2`).textContent;
const elemntlist = category.querySelectorAll(`ul > li`).length;
console.log(`Category : ${tittle}`);
console.log(`Elements : ${elemntlist}`);
});
