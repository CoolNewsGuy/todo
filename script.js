import Todo from "./components/Todo.js";

const newTaskTextInput = document.querySelector(".new-task-text");
const addBtn = document.querySelector("#task-adder-btn");
const todosContainer = document.querySelector(".todos-container");

addBtn.addEventListener("click", () => {
    todosContainer.append(Todo(newTaskTextInput.value));
    newTaskTextInput.value = "";
});
