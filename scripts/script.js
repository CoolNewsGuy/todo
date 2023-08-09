import "./DOM.js";

export let todosDivs = [];
export let removedTodosDivs = [];

export function addTodo(todoDiv) {
    todosDivs.push(todoDiv);
}

export function removeTodo(todoDiv) {
    removedTodosDivs.push(todosDivs.splice(todosDivs.indexOf(todoDiv), 1)[0]);
}
