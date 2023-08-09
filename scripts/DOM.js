import Todo from "./components/Todo.js";
import { todos } from "./script.js";

const UIUpdater = (() => {
    let todosContainer = document.querySelector(".todos-container");

    function refreshTodosContainer() {
        todosContainer.innerHTML = "";

        todos.forEach((todo) => {
            todosContainer.append(Todo(todo));
        });
    }
})();
