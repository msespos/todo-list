import { displayTodoTitles } from './todoLayout';
import { activeProject } from './index.js';
import { refreshProjectDisplay, deleteProject, activateEditProjectForm } from './projectBuilder';

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
  const activeProjectTitle = document.createElement("h3");
  activeProjectTitle.textContent = activeProject.project.title;
  activeProjectDiv.appendChild(activeProjectTitle);
  displayTodoTitles(activeProject.project);
  const editButton = document.createElement("button");
  const modal = document.querySelector(".project-modal");
  const toggleModal = () => {
    modal.classList.toggle("show-modal");
  };
  editButton.classList.add("project-title");
  editButton.textContent = "Edit Project Title";
  editButton.onclick = () => {
    const createProjectButton = document.getElementById("create-project-button");
    createProjectButton.style.visibility = "hidden";
    const editProjectButton = document.getElementById("edit-project-button");
    editProjectButton.style.visibility = "visible";
    const hiddenField = document.getElementById("project-id");
    hiddenField.value = activeProject.index;
    activateEditProjectForm();
    toggleModal();
  }
  activeProjectDiv.appendChild(editButton);
  const deleteButton = document.createElement("button");
  deleteButton.classList.add("project-title");
  deleteButton.textContent = "Delete Project";
  deleteButton.onclick = () => {
    const hiddenField = document.getElementById("project-id");
    hiddenField.value = activeProject.index;
    deleteProject();
  }
  activeProjectDiv.appendChild(deleteButton);
}

const displayNewTodoButton = () => {
  const div = document.querySelector(".active-project");
  const trigger = document.createElement("button");
  trigger.textContent = "New Todo";
  trigger.classList.add("new-todo-button");
  div.appendChild(trigger);
  const modal = document.querySelector(".todo-modal");
  const toggleModal = () => {
    modal.classList.toggle("show-modal");
  };
  trigger.onclick = () => {
    const title = document.getElementById("todo-title");
    title.value = "";
    const description = document.getElementById("todo-description");
    description.value = "";
    const highPriority = document.getElementById("high-priority");
    highPriority.checked = true;
    const notes = document.getElementById("todo-notes");
    notes.value = "";
    const createTodoButton = document.getElementById("create-todo-button");
    createTodoButton.style.visibility = "visible";
    const editTodoButton = document.getElementById("edit-todo-button");
    editTodoButton.style.visibility = "hidden";
    const hiddenField = document.getElementById("project-id");
    hiddenField.value = activeProject.index;
    toggleModal();
  };
};

const displayInactiveProjects = (projects) => {
  projects.forEach((project, index) => {
    const div = document.querySelector(".sidebar")
    const title = document.createElement("h3");
    title.classList.add("project-title");
    title.id = "project-title-" + index;
    title.textContent = project.title;
    div.appendChild(title);
    title.onclick = () => {
      activeProject.project = project;
      activeProject.index = index;
      refreshProjectDisplay(projects);
    }
  });
};

export { clearProjectDisplay, displayProjects }
