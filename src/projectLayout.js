import { displayTodoTitles } from './todoLayout';

const clearProjectDisplay = () => {
  const titles = document.querySelectorAll('.project-title');
  titles.forEach((title) => {
    title.remove();
  });
};

const displayProjects = (projects) => {
  projects.forEach((project, index) => {
    const div = document.getElementById("content");
    const title = document.createElement("div");
    title.classList.add("project-title");
    title.id = "project-title-" + index;
    title.textContent = project.title;
    div.appendChild(title);
    displayNewTodoButton(index);
    displayTodoTitles(project);
  });
};

const displayNewTodoButton = (index) => {
  const div = document.getElementById("project-title-" + index);
  const trigger = document.createElement("button");
  trigger.textContent = "New Todo";
  div.appendChild(trigger);
  const modal = document.querySelector(".todo-modal");
  const toggleModal = () => {
    modal.classList.toggle("show-modal");
  };
  trigger.onclick = () => {
    const hiddenField = document.getElementById("project-id");
    hiddenField.value = index;
    toggleModal();
  };
};

export { clearProjectDisplay, displayProjects }
