function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
const mainBody = document.body;

const mainDiv = mainBody.querySelector(`.widget`)

const span = mainDiv.querySelector(`.color`);

const button = mainDiv.querySelector(`.change-color`);
button.addEventListener(`click`, () => {
  const randomColor = getRandomHexColor();
  mainBody.style.backgroundColor = randomColor;
  span.style.color = randomColor;
})

