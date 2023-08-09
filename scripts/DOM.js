import Todo from "./components/Todo.js";
import { addTodo, todos } from "./script.js";

const UIUpdater = (() => {
    let todosContainer = document.querySelector(".todos-container");
    let todoTextInput = document.querySelector(".new-todo-text");
    let noTodoErrorElement = document.querySelector(".no-todo-error");
    const addBtn = document.querySelector("#todo-adder-btn");

    function refreshTodosContainer() {
        todosContainer.innerHTML = "";

        todos.forEach((todo) => {
            todosContainer.append(Todo(todo));
        });
    }

    function __addToTodosContainer(e) {
        e.preventDefault();

        if (todoTextInput.value.trim() === "") {
            noTodoErrorElement.classList.remove("hidden");
            noTodoErrorElement.classList.add("visible");
            return;
        }

        noTodoErrorElement.classList.remove("visible");
        noTodoErrorElement.classList.add("hidden");

        addTodo(todoTextInput.value);
        todosContainer.append(Todo(todos[todos.length - 1]));

        todoTextInput.value = "";
    }

    addBtn.addEventListener("click", __addToTodosContainer);
})();
