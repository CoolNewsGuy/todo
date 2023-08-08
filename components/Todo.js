export default function Todo(todoText) {
    return `
        <div class="todo">
            <p class="todo-text">${todoText}</p>
            <div class="todo-checkbox">
                <div class="check-mark"></div>
            </div>
        </div>
    `;
}
