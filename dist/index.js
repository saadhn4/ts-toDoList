"use strict";
var _a;
const todoArray = [];
function displayTodo() {
    let todoListHtml = "";
    todoArray.forEach((todoObject, index) => {
        const { name, date } = todoObject;
        const html = `
      <p>${name}</p>
      <p>${date}</p>
      <button class="delete-btn">Delete</button>
      `;
        todoListHtml += html;
    });
    let container = document.querySelector(".js-todo-list");
    if (container) {
        container.innerHTML = todoListHtml;
        const deleteBtn = document.querySelectorAll(".delete-btn");
        deleteBtn.forEach((deleteBtn, index) => {
            deleteBtn.addEventListener("click", () => {
                todoArray.splice(index, 1);
                displayTodo();
            });
        });
    }
}
function addTodo() {
    const taskNameElement = document.querySelector(".js-name-input");
    const taskDateElement = document.querySelector(".js-date-input");
    if (!taskNameElement || !taskDateElement)
        return;
    const name = taskNameElement.value;
    const date = taskDateElement.value;
    if (!name || !date)
        return;
    todoArray.push({ name, date });
    displayTodo();
}
(_a = document.querySelector(".add-btn")) === null || _a === void 0 ? void 0 : _a.addEventListener("click", () => {
    addTodo();
});
