

const nameInput = document.querySelector(`#name-input`);
const nameOutput = document.querySelector(`#name-output`);

const nameOutputWithoutSpace = nameOutput.textContent.trim();

nameInput.addEventListener(`input`, (event) => {
    if(event.currentTarget.value !== `` && event.currentTarget.value !== ` `) {
        nameOutput.textContent = event.currentTarget.value;
    } else {
        nameOutput.textContent = nameOutputWithoutSpace;
    }
})
