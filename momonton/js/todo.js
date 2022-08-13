const toDoForm = document.getElementById("todo-form");
const toDoInput = toDoForm.querySelector("input");
            // document.querySelector("#todo-form input");
const toDoList = document.getElementById("todo-list");

function paintToDo(newTodo){
    const li = document.createElement("li");
    const span = document.createElement("span");
    li.appendChild(span);
    span.innerText = newTodo;
    toDoList.appendChild(li);
}

function onToDoSubmit(event){
// js는 방생한 이벤트를 함수의 첫번째 인자로 준다.
    event.preventDefault();
    const newTodo = toDoInput.value;
    toDoInput.value = "";
    paintToDo(newTodo);
}

toDoForm.addEventListener("submit", onToDoSubmit);