const mainList = document.querySelector(`#categories`);

const listWithClass = mainList.querySelectorAll(`.item`);
console.log(`Number of categories: ${listWithClass.length}`);

const firstHead = mainList.querySelectorAll("h2");
firstHead.forEach((head, index) => {
    if(index === 0) {
        console.log(`Category: ${head.textContent}`);
    }
});

const firstUlItem = mainList.querySelector(`.ul-item`);
const firstItems = firstUlItem.querySelectorAll(`.first-item`);
console.log(`Elements: ${firstItems.length}`);

firstHead.forEach((head, index) => {
    if(index === 1) {
        console.log(`Category: ${head.textContent}`);
    }
});

const secondUlItem = mainList.querySelector(`.ul-item-second`);
const secondItems = secondUlItem.querySelectorAll(`.second-item`);
console.log(`Elements: ${secondItems.length}`);

firstHead.forEach((head, index) => {
    if(index === 2) {
        console.log(`Category: ${head.textContent}`);
    }
});

const thirdUlItem = mainList.querySelector(`.ul-item-third`);
const thirdItems = thirdUlItem.querySelectorAll(`.third-item`);
console.log(`Elements: ${thirdItems.length}`);