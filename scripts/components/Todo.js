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
        todoCheckboxDiv.classList.add("todo-checked");
    });

    todoTextPara.innerText = todoText;
    todoCheckboxDiv.append(checkMarkDiv);
    todoDiv.append(todoTextPara, todoCheckboxDiv);

    return todoDiv;
}
