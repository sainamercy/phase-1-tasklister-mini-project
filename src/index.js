document.addEventListener("DOMContentLoaded", () => {
  const form = document.querySelector("#create-task-form");

  // function to render todo items
  const renderTodoItem = function (e) {
    e.preventDefault();
    const todoItemInput = document.querySelector("#new-task-description").value;
    console.log(todoItemInput);
    const todoList = document.querySelector("#tasks");
    const item = document.createElement("li");
    item.textContent = todoItemInput;
    // newest to do item to appear first in the list
    todoList.prepend(item);
  };

  form.addEventListener("submit", renderTodoItem);
});
