const loginForm = document.querySelector(`.login-form`);

loginForm.addEventListener(`submit`, (event) => {
  event.preventDefault();
  const {
    elements: { email, password },
  } = event.currentTarget;
  if (email.value === "" || password.value === "") {
    return alert("Всі поля повинні бути заповнені");
  }
  event.currentTarget.reset();
});
