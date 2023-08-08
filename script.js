let todoCheckbox = document.querySelectorAll(".todo-checkbox");

todoCheckbox.forEach((checkbox) =>
    checkbox.addEventListener("click", () => {
        checkbox.classList.add("todo-checked");
    })
);
