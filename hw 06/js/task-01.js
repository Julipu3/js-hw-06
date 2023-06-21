const items = document.querySelectorAll("li.item").length;
console.log('Number of categories:', items);

items.forEach(item => {
    console.log(`Category:`, item.firstElementChild.textContent);
console.log(`Elements:`, item.lastElementChild.children.length);
});
