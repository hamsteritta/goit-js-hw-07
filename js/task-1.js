const listItems = document.querySelectorAll("li.item");
console.log('Number of categories: ', listItems.length);
listItems.forEach(function (item) {
    const title = item.querySelector("h2");
    const list = item.querySelectorAll("li");
    console.log('Category: ', title.textContent);
 console.log('Elements: ', list.length);
});



