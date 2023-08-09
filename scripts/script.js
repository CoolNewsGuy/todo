import "./DOM.js";

export let todosDivs = [];
export let removedTodosDivs = [];

export function addTodoToTodosDivs(todoDiv) {
    todosDivs.push(todoDiv);
}

export function removeTodoFromTodosDivs(todoDiv) {
    removedTodosDivs.push(todosDivs.splice(todosDivs.indexOf(todoDiv), 1)[0]);
}
