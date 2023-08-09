import { UIUpdater } from "../DOM.js";
import { addTodo, removeTodo, removedTodosDivs } from "../script.js";

export default function Todo(todoText) {
    const todoDiv = document.createElement("div");
    const todoCheckboxDiv = document.createElement("div");
    const checkMarkDiv = document.createElement("div");
    const todoTextPara = document.createElement("p");

    todoDiv.className = "todo";
    todoCheckboxDiv.className = "todo-checkbox";
    checkMarkDiv.className = "check-mark";
    todoTextPara.className = "todo-text";

    todoCheckboxDiv.addEventListener("click", () => {
        if (!todoCheckboxDiv.classList.contains("todo-checked")) {
            todoCheckboxDiv.classList.add("todo-checked");
            UIUpdater.todosContainer.removeChild(todoDiv);
            UIUpdater.removedTodosContainer.append(todoDiv);
            removeTodo(todoDiv);
            return;
        }

        todoCheckboxDiv.classList.remove("todo-checked");
        removedTodosDivs.splice(removedTodosDivs.indexOf(todoDiv), 1);
        addTodo(todoDiv);
        UIUpdater.removedTodosContainer.removeChild(todoDiv);
        UIUpdater.todosContainer.append(todoDiv);
    });

    todoTextPara.innerText = todoText;
    todoCheckboxDiv.append(checkMarkDiv);
    todoDiv.append(todoTextPara, todoCheckboxDiv);

    return todoDiv;
}
