import Todo from "./components/Todo.js";
import { addTodo, todosDivs } from "./script.js";

export const UIUpdater = (() => {
    let todosContainer = document.querySelector(".todos-container");
    let todoTextInput = document.querySelector(".new-todo-text");
    let noTodoErrorElement = document.querySelector(".no-todo-error");
    let trashBin = document.querySelector(".trash-bin");
    let removedTodosContainer = trashBin.querySelector(
        ".removed-todos-container"
    );
    const addBtn = document.querySelector("#todo-adder-btn");
    const trashIcon = document.querySelector(".trash-icon");

    function refreshTodosContainer() {
        todosContainer.innerHTML = "";

        todosDivs.forEach((todoDiv) => {
            todosContainer.append(todoDiv);
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

        addTodo(Todo(todoTextInput.value));
        todosContainer.append(todosDivs[todosDivs.length - 1]);

        todoTextInput.value = "";
    }

    function __toggleTrashBin() {
        if (trashBin.classList.contains("hidden")) {
            trashBin.classList.remove("hidden");
        } else {
            trashBin.classList.add("hidden");
        }
    }

    addBtn.addEventListener("click", __addToTodosContainer);
    trashIcon.addEventListener("click", __toggleTrashBin);

    return {
        todosContainer,
        removedTodosContainer,
    };
})();
