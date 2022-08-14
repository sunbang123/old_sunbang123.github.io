const loginForm = document.getElementById("login-form");
const nameInput = document.getElementById("name-form");
const emailInput = document.getElementById("email-form");

function onLoginSubmit(event){
    event.preventDefault();
    const username = nameInput.value;
    loginForm.classList.add("hidden");
}

nameInput.addEventListener("submit", onLoginSubmit);
emailInput.addEventListener("submit", onLoginSubmit);