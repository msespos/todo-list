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
  //const div = document.getElementById("project-title-" + index);
  project.todos.forEach((todo) => {
    const title = document.createElement("div");
    title.textContent = todo.title;
    title.classList.add("todo")
  });
};

export { clearProjectTitleDisplay, displayProjectTitles }
