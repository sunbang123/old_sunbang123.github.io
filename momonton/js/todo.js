const toDoForm = document.getElementById("todo-form");
const toDoInput = toDoForm.querySelector("input");
            // document.querySelector("#todo-form input");
const toDoList = document.getElementById("todo-list");

function onToDoSubmit(event){
// js는 방생한 이벤트를 함수의 첫번째 인자로 준다.
    event.preventDefault();
    console.log(toDoInput.value);
}

toDoForm.addEventListener("submit", onToDoSubmit);