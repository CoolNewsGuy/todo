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

function storeTodosInLocalStorage() {
    localStorage.setItem(
        "todosDivs",
        JSON.stringify(todosDivs.map((div) => div.querySelector("p").innerText))
    );
}

function storeRemovedTodosInLocalStorage() {
    localStorage.setItem(
        "removedTodosDivs",
        JSON.stringify(
            removedTodosDivs.map((div) => div.querySelector("p").innerText)
        )
    );
}
