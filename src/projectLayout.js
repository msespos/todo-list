import { displayTodoTitles } from './todoLayout';
import { activeProject } from './index.js';
import { refreshProjectDisplay } from './projectBuilder';

const clearProjectDisplay = () => {
  const titles = document.querySelectorAll('.project-title');
  titles.forEach((title) => {
    title.remove();
  });
};

const displayProjects = (projects) => {
  clearActiveProject();
  displayActiveProject();
  displayNewTodoButton();
  displayInactiveProjects(projects);
};

const clearActiveProject = () => {
  const project = document.querySelector(".active-project");
  while (project.firstChild) {
    project.removeChild(project.firstChild);
  }
}

const displayActiveProject = () => {
  const activeProjectDiv = document.querySelector(".active-project");
  const activeProjectTitle = document.createElement("div");
  activeProjectTitle.textContent = activeProject.project.title;
  activeProjectDiv.appendChild(activeProjectTitle);
  displayTodoTitles(activeProject.project);
}

const displayNewTodoButton = () => {
  const div = document.querySelector(".active-project");
  const trigger = document.createElement("button");
  trigger.textContent = "New Todo";
  div.appendChild(trigger);
  const modal = document.querySelector(".todo-modal");
  const toggleModal = () => {
    modal.classList.toggle("show-modal");
  };
  trigger.onclick = () => {
    const hiddenField = document.getElementById("project-id");
    hiddenField.value = activeProject.index;
    toggleModal();
  };
};

const displayInactiveProjects = (projects) => {
  projects.forEach((project, index) => {
    const div = document.querySelector(".sidebar")
    const title = document.createElement("div");
    title.classList.add("project-title");
    title.id = "project-title-" + index;
    title.textContent = project.title;
    div.appendChild(title);
    title.onclick = () => {
      activeProject.project = project;
      activeProject.index = index;
      refreshProjectDisplay();
    }
  });
};

export { clearProjectDisplay, displayProjects }
