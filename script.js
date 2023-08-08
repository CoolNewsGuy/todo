import Todo from "./components/Todo.js";

const newTaskTextInput = document.querySelector(".new-task-text");
const noTaskErrorElement = document.querySelector(".no-task-error");
const addBtn = document.querySelector("#task-adder-btn");
const todosContainer = document.querySelector(".todos-container");

addBtn.addEventListener("click", addTask);

function addTask() {
    if (newTaskTextInput.value === "") {
        noTaskErrorElement.classList.remove("hidden");
        noTaskErrorElement.classList.add("visible");
        return;
    }

    noTaskErrorElement.classList.remove("visible");
    noTaskErrorElement.classList.add("hidden");
    todosContainer.append(Todo(newTaskTextInput.value));
    newTaskTextInput.value = "";
}
