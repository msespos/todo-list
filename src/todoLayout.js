const clearTodoTitleDisplay = (project) => {
  const titles = document.querySelectorAll('.todo-title');
  titles.forEach((title) => {
    title.remove();
  });
}

const displayTodoTitles = (project) => {
  project.forEach((todo) => {
    const div = document.getElementById("content");
    const title = document.createElement("div");
    title.classList.add("todo-title")
    title.textContent = todo.title;
    div.appendChild(title);
  });
};

export { clearTodoTitleDisplay, displayTodoTitles }