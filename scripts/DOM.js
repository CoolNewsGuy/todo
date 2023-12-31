import Todo from "./components/Todo.js";
import {
    addTodoToRemovedTodosDivs,
    addTodoToTodosDivs,
    removeTodoFromTodosDivs,
    removedTodosDivs,
    todosDivs,
} from "./script.js";

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

    function removeTodoFromTodosContainer(event) {
        let todoCheckboxDiv = event.target.closest(".todo-checkbox");
        let todoDiv = todoCheckboxDiv.closest(".todo");

        todoCheckboxDiv.classList.add("todo-checked");
        removeTodoFromTodosDivs(todoDiv);
        UIUpdater.todosContainer.removeChild(todoDiv);
        UIUpdater.removedTodosContainer.append(todoDiv);
    }

    function addTodoFromDeletedTodos(event) {
        let todoCheckboxDiv = event.target.closest(".todo-checkbox");
        let todoDiv = todoCheckboxDiv.closest(".todo");

        todoCheckboxDiv.classList.remove("todo-checked");
        removedTodosDivs.splice(removedTodosDivs.indexOf(todoDiv), 1);
        addTodoToTodosDivs(todoDiv);
        UIUpdater.removedTodosContainer.removeChild(todoDiv);
        UIUpdater.todosContainer.append(todoDiv);
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

        addTodoToTodosDivs(Todo(todoTextInput.value));
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

    function __getTodosFromLocalStorage() {
        let todosTexts = localStorage.getItem("todosTexts");
        let removedTodosTexts = localStorage.getItem("removedTodosTexts");

        if (todosTexts) {
            JSON.parse(todosTexts).forEach((text) => {
                addTodoToTodosDivs(Todo(text));
            });

            todosDivs.forEach((todoDiv) => {
                todosContainer.appendChild(todoDiv);
            });
        }

        if (removedTodosTexts) {
            JSON.parse(removedTodosTexts).forEach((text) => {
                addTodoToRemovedTodosDivs(Todo(text, true));
            });

            removedTodosDivs.forEach((todoDiv) => {
                removedTodosContainer.appendChild(todoDiv);
            });
        }
    }

    addBtn.addEventListener("click", __addToTodosContainer);
    trashIcon.addEventListener("click", __toggleTrashBin);
    window.addEventListener("load", __getTodosFromLocalStorage);

    return {
        todosContainer,
        removedTodosContainer,
        removeTodoFromTodosContainer,
        addTodoFromDeletedTodos,
    };
})();
