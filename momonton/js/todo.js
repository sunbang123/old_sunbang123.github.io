const toDoForm = document.getElementById("todo-form");
const toDoInput = toDoForm.querySelector("input");
            // document.querySelector("#todo-form input");
const toDoList = document.getElementById("todo-list");

const TODOS_KEY = "todos";

let toDos = [];

function saveToDos(){
    localStorage.setItem(TODOS_KEY, JSON.stringify(toDos)); // array 형태로 텍스트 저장
}

function deleteToDo(event){
    const li = event.target.parentElement;
    li.remove();
    toDos = toDos.filter((toDo) => toDo.id !== parseInt(li.id));
    saveToDos();
}

function paintToDo(newTodo){
    const li = document.createElement("li");
    li.id = newTodo.id;
    const p = document.createElement("p");
    p.innerText = newTodo.text;
    const button = document.createElement("button");
    button.innerText = "delete";
    button.addEventListener("click", deleteToDo)
    li.appendChild(p);
    li.appendChild(button);
    toDoList.appendChild(li);
}

function onToDoSubmit(event){
// js는 방생한 이벤트를 함수의 첫번째 인자로 준다.
    event.preventDefault();
    const newTodo = toDoInput.value;
    toDoInput.value = "";
    const newTodoObj = {
        text: newTodo,
        id: Date.now(),
    }
    toDos.push(newTodoObj);
    paintToDo(newTodoObj);
    saveToDos(); // 로컬 스토리지에는 텍스트만 저장 가능!
}

toDoForm.addEventListener("submit", onToDoSubmit);

const savedToDos = localStorage.getItem(TODOS_KEY);

if(savedToDos !== null){
    const parsedToDos = JSON.parse(savedToDos); // 텍스트를 원래 형태로 되돌려준다.
    toDos = parsedToDos;
    parsedToDos.forEach(paintToDo);
}

if(savedUser !== null){
    toDoForm.classList.remove(HIDDEN_CLASSNAME);
    toDoList.classList.remove(HIDDEN_CLASSNAME);
}