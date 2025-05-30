const form = document.querySelector("#form");
const usernameField = document.querySelector("#username");
const emailField = document.querySelector("#email");
const passwordField = document.querySelector("#password");
const password2Field = document.querySelector("#password2");

const showError = (input, message) => {
  const formCon = input.parentElement;
  formCon.classList.remove("success");
  formCon.classList.add("error");
  const sm = formCon.querySelector("small");
  sm.innerText = message;
};

const showSuccess = (input) => {
  const formCon = input.parentElement;
  formCon.classList.remove("error");
  formCon.classList.add("success");
};
const getFieldName = (id) => {
  if (id === "password2") return "Password";
  return id.charAt(0).toUpperCase() + id.slice(1);
};

const validate = (input) => {
  if (input.id === "submit-button") return;
  if (input.value.trim() === "") {
    showError(input, `${getFieldName(input.id)} is required`);
  } else {
    switch (input.id) {
      case "username":
        validateUsername(input);
        break;
      case "email":
        validateEmail(input);
        break;
      case "password":
        validatePassword(input);
        break;
      case "password2":
        matchPassword(input);
        break;
    }
  }
};

const validateUsername = (input) => {
  const username = input.value;
  const longEnough = /^.{3,15}$/.test(username);
  const onlyLetters = /[a-zA-Z]/.test(username);
  if (!longEnough) showError(input, "Username must be between 3 and 15 characters");
  else if (!onlyLetters) showError(input, "Username can only contain letters");
  else showSuccess(input);
};

const validateEmail = (input) => {
  const email = input.value;
  const isValid = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(email);
  if (!isValid) showError(input, "Please enter a valid email address");
  else showSuccess(input);
};

const validatePassword = (input) => {
  const password = input.value;
  const longEnough = /^.{6,25}$/.test(password);
  const hasCapital = /[A-Z]/.test(password);
  const hasLower = /[a-z]/.test(password);
  const hasNum = /\d/.test(password);
  const hasSpecial = /\W/.test(password);
  if (!longEnough) showError(input, "Password must be between 6 and 25 characters");
  else if (!(hasCapital && hasLower && hasNum && hasSpecial)) showError(input, "Please make a stronger password");
  else showSuccess(input);
};

const matchPassword = (input) => {
  const thisPassword = passwordField.value;
  const otherPassword = input.value;
  if (otherPassword.localeCompare(thisPassword) !== 0) showError(input, "Passwords must match");
  else {
    validatePassword(input);
  }
};

form.addEventListener("submit", (e) => {
  e.preventDefault();
  console.log(form.elements);
  [...form.elements].forEach((field) => validate(field));
});
