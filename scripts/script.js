import "./DOM.js";

export let todosDivs = [];
export let removedTodosDivs = [];

export function addTodoToTodosDivs(todoDiv) {
    todosDivs.push(todoDiv);
    storeTodosInLocalStorage();
    storeRemovedTodosInLocalStorage();
}

export function removeTodoFromTodosDivs(todoDiv) {
    removedTodosDivs.push(todosDivs.splice(todosDivs.indexOf(todoDiv), 1)[0]);
    storeRemovedTodosInLocalStorage();
    storeTodosInLocalStorage();
}

// when getting removed todos from local storage
export function addTodoToRemovedTodosDivs(todoDiv) {
    removedTodosDivs.push(todoDiv);
}

function storeTodosInLocalStorage() {
    localStorage.setItem(
        "todosTexts",
        JSON.stringify(todosDivs.map((div) => div.querySelector("p").innerText))
    );
}

function storeRemovedTodosInLocalStorage() {
    localStorage.setItem(
        "removedTodosTexts",
        JSON.stringify(
            removedTodosDivs.map((div) => div.querySelector("p").innerText)
        )
    );
}
