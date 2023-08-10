import { UIUpdater } from "../DOM.js";

export default function Todo(todoText, isRemoved) {
    const todoDiv = document.createElement("div");
    const todoCheckboxDiv = document.createElement("div");
    const checkMarkDiv = document.createElement("div");
    const todoTextPara = document.createElement("p");

    todoDiv.className = "todo";
    todoCheckboxDiv.className = "todo-checkbox";
    checkMarkDiv.className = "check-mark";
    todoTextPara.className = "todo-text";

    if (isRemoved) {
        todoCheckboxDiv.classList.add("todo-checked");
    }

    todoCheckboxDiv.addEventListener("click", (e) => {
        if (!todoCheckboxDiv.classList.contains("todo-checked")) {
            UIUpdater.removeTodoFromTodosContainer(e);
        } else {
            UIUpdater.addTodoFromDeletedTodos(e);
        }
    });

    todoTextPara.innerText = todoText;
    todoCheckboxDiv.append(checkMarkDiv);
    todoDiv.append(todoTextPara, todoCheckboxDiv);

    return todoDiv;
}
