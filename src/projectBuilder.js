import { clearProjectDisplay, displayProjects } from './projectLayout';
import { clearTodoTitleDisplay } from './todoLayout';
import { activeProject } from './index.js';

const Project = (title, todos) => {
  return { title, todos }
};

let projects = JSON.parse(localStorage.getItem('projects'));

const createFirstProject = () => {
  const project = Project("Default Project", []);
  projects.push(project);
  localStorage.setItem('projects', JSON.stringify(projects));
  return project;
};

const refreshProjectDisplay = (projects) => {
  clearTodoTitleDisplay();
  clearProjectDisplay();
  displayProjects(projects);
};

const activateCreateProjectForm = () => {
  const createProjectButton = document.getElementById("create-project-button");
  // code snippet below for disabling Enter key adapted from
  // https://tutorial.eyehunts.com/js/disable-enter-key-on-an-input-field-in-javascript-example-code/
  const titleTextField = document.getElementById("project-title");
  titleTextField.addEventListener("keypress", function(event) {
    if (event.key === "Enter") {
      event.preventDefault();
    }
  });
  createProjectButton.onclick = () => {
    let title = document.getElementById("project-title");
    if (title.value === "") {
      alert("You need a title! Please try again.");
      document.querySelector(".project-modal").classList.toggle("show-modal");
      title.focus();
    } else {
      const project = Project(title.value, []);
      projects.push(project);
      activeProject.project = project;
      activeProject.index = projects.findIndex(e => e === project);
      refreshProjectDisplay(projects);
      createProjectButton.blur();
    }
    localStorage.setItem('projects', JSON.stringify(projects));
  }
};

const activateEditProjectForm = () => {
  const projectHiddenField = document.getElementById("edit-project-id");
  const projectId = parseInt(projectHiddenField.value);
  const project = projects[projectId];
  const editProjectButton = document.getElementById("edit-project-button");
  // code snippet below for disabling Enter key adapted from
  // https://tutorial.eyehunts.com/js/disable-enter-key-on-an-input-field-in-javascript-example-code/
  const titleTextField = document.getElementById("project-title");
  titleTextField.value = activeProject.project.title;
  titleTextField.addEventListener("keypress", function(event) {
    if (event.key === "Enter") {
      event.preventDefault();
    }
  });
  editProjectButton.onclick = () => {
    let title = document.getElementById("project-title");
    if (title.value === "") {
      alert("You need a new title! Please try again.");
      document.querySelector(".project-modal").classList.toggle("show-modal");
      title.focus();
    } else {
      project.title = title.value;
      projects[projectId] = project;
      refreshProjectDisplay(projects);
      editProjectButton.blur();
    }
    localStorage.setItem('projects', JSON.stringify(projects));
  }
};

const deleteProject = () => {
  const projectId = activeProject.index;
  projects.splice(projectId, 1);
  if (projects.length === 0) {
    activeProject.project = createFirstProject();
  }
  activeProject.project = projects[0];
  activeProject.index = 0;
  refreshProjectDisplay(projects);
  localStorage.setItem('projects', JSON.stringify(projects));
};

export { projects, createFirstProject, activateCreateProjectForm, refreshProjectDisplay,
         activateEditProjectForm, deleteProject, activeProject }
