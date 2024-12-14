

const loginForm = document.querySelector(`.login-form`);
loginForm.addEventListener('submit', (event) => {
event.preventDefault();
const { email, password } = [...loginForm.elements].filter(
  input => input.type !== `submit`)
  .reduce((obj, input) => {obj[input.name] = input.value.trim()
    return obj;
}, {});

if (!email || !password) {
    alert(`All form fields must be filled in`);
    return;
  }

  loginForm.reset();

  console.log(email, password);
  console.log(obj);
});

