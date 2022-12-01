document.addEventListener("DOMContentLoaded", () => {
  const form = document.querySelector("#create-task-form");

  // function to render todo items
  const renderTodoItem = function (e) {
    e.preventDefault();
    const todoItemInput = document.querySelector("#new-task-description").value;
    const todoList = document.querySelector("#tasks");
    const item = document.createElement("li");
    item.textContent = todoItemInput;
    // newest to do item to appear first in the list
    todoList.prepend(item);

    // deleting task
    const deleteBtn = document.createElement("button");
    deleteBtn.innerHTML = "x";
    item.append(deleteBtn);
    const deleteTodo = function () {
      const li = document.querySelector("li");
      li.remove();
    };
    deleteBtn.addEventListener("click", deleteTodo);
  };

  form.addEventListener("submit", renderTodoItem);
});
