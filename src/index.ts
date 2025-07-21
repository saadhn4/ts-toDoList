type Task = {
  name: string;
  date: string;
};

const todoArray: Task[] = [];

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
  const taskNameElement =
    document.querySelector<HTMLInputElement>(".js-name-input");

  const taskDateElement =
    document.querySelector<HTMLInputElement>(".js-date-input");

  if (!taskNameElement || !taskDateElement) return;

  const name = taskNameElement.value;
  const date = taskDateElement.value;

  if (!name || !date) return;

  todoArray.push({ name, date });

  displayTodo();
}

document.querySelector(".add-btn")?.addEventListener("click", () => {
  addTodo();
});
