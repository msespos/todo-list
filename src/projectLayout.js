const clearProjectTitleDisplay = () => {
  const titles = document.querySelectorAll('.project-title');
  titles.forEach((title) => {
    title.remove();
  });
};

const displayProjectTitles = (projects) => {
  projects.forEach((project, index) => {
    const div = document.getElementById("content");
    const title = document.createElement("div");
    title.classList.add("project-title");
    title.id = "project-title-" + index;
    title.textContent = project.title;
    div.appendChild(title);
    title.onclick = () => {
      toggleProject(project, index);
    }
    displayNewTodoButton(index);
  });
};

const toggleProject = (project) => {
  if (document.querySelector(".todo")) {
    clearProject();
  } else {
    displayTodoTitles(project);
  }
};

const clearProject = () => {
  const projectElements = document.querySelectorAll(".project");
  projectElements.forEach((projectElement) => {
    projectElement.remove();
  });
};

const displayTodoTitles = (project) => {
  project.todos.forEach((todo) => {
    const title = document.createElement("div");
    title.textContent = todo.title;
    title.classList.add("todo")
  });
};

const displayNewTodoButton = (index) => {
  const div = document.getElementById("project-title-" + index);
  const btn = document.createElement("button");
  btn.classList.add("todo-trigger");
  btn.textContent = "New Todo";
  div.appendChild(btn);
}

export { clearProjectTitleDisplay, displayProjectTitles }
