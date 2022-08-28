const nameForm = document.getElementById("name-form");
const nameInput = nameForm.querySelector("input");
const emailForm = document.getElementById("email-form");
const emailInput = emailForm.querySelector("input");
const logoutForm = document.getElementById("logout-form");
const HIDDEN_CLASSNAME = "hidden";

let user = [];
let members = [];

const savedUser = localStorage.getItem("current user");

if(savedUser !== null){
    nameForm.classList.add(HIDDEN_CLASSNAME);
    emailForm.classList.add(HIDDEN_CLASSNAME);
    window.addEventListener('paintLoginForm', paintLoginForm);
}

const savedMembers = localStorage.getItem("previous user");

if(savedMembers !== null){
    const parsedToDos = JSON.parse(savedMembers); // 텍스트를 원래 형태로 되돌려준다.
    members = parsedToDos;
}

function saveMembers(){
    localStorage.setItem("current user", JSON.stringify(user)); // array 형태로 텍스트 저장
    localStorage.setItem("previous user", JSON.stringify(user)); // array 형태로 텍스트 저장
}

function paintLoginForm(caller, nextElement){
    caller.classList.add(HIDDEN_CLASSNAME);
    nextElement.classList.remove(HIDDEN_CLASSNAME);

    if(nextElement.id === "todo-form"){
        const toDoList = document.getElementById("todo-list");
        toDoList.classList.remove(HIDDEN_CLASSNAME);
        logoutForm.classList.remove(HIDDEN_CLASSNAME);
        toDoList.style.display = "block";
        gridBox.style.height = "100vh";
    };
}

function onLoginSubmit(event){
    event.preventDefault();
    const caller = event.target;
    const userPrivacy = caller.querySelector("input").value;
    const nextElement = caller.nextElementSibling;
    const newLoginObj = {
        type: caller.id,
        value: userPrivacy,
    }

    user.push(newLoginObj);
    paintLoginForm(caller, nextElement);
    saveMembers();
}

function onLogoutClick(){
    localStorage.removeItem("current user");
}

nameForm.addEventListener("submit", onLoginSubmit);
emailForm.addEventListener("submit", onLoginSubmit);
logoutForm.addEventListener("submit", onLogoutClick);