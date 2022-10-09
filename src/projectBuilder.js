import { clearProjectDisplay, displayProjects } from './projectLayout';
import { clearTodoTitleDisplay } from './todoLayout';
import { activeProject } from './index.js';

const Project = (title, todos) => {
  return { title, todos }
};

let projects = [];

const createFirstProject = () => {
  const project = Project("Default Project", []);
  projects.push(project);
  return project;
};

const refreshProjectDisplay = (projects) => {
  clearTodoTitleDisplay();
  clearProjectDisplay();
  displayProjects(projects);
};

const activateCreateProjectForm = () => {
  const createProjectButton = document.getElementById("create-project-button");
    createProjectButton.style.visibility = "visible";
    const editProjectButton = document.getElementById("edit-project-button");
    editProjectButton.style.visibility = "hidden";
  // code snippet below for disabling Enter key adapted from
  // https://tutorial.eyehunts.com/js/disable-enter-key-on-an-input-field-in-javascript-example-code/
  const titleTextField = document.getElementById("project-title");
  titleTextField.addEventListener("keypress", function(event) {
    if (event.key === "Enter") {
      event.preventDefault();
    }
  });
  createProjectButton.onclick = () => {
    const project = Project(document.getElementById("project-title").value, []);
    projects.push(project);
    activeProject.project = project;
    refreshProjectDisplay(projects);
    createProjectButton.blur();
  }
};

const activateEditProjectForm = () => {
  const projectHiddenField = document.getElementById("project-id");
  const projectId = parseInt(projectHiddenField.value);
  const project = projects[projectId];
  const editProjectButton = document.getElementById("edit-project-button");
  // code snippet below for disabling Enter key adapted from
  // https://tutorial.eyehunts.com/js/disable-enter-key-on-an-input-field-in-javascript-example-code/
  const titleTextField = document.getElementById("project-title");
  titleTextField.addEventListener("keypress", function(event) {
    if (event.key === "Enter") {
      event.preventDefault();
    }
  });
  editProjectButton.onclick = () => {
    project.title = document.getElementById("project-title").value;
    projects[projectId] = project;
    refreshProjectDisplay(projects);
    editProjectButton.blur();
  }
};

const deleteProject = () => {
  const projectHiddenField = document.getElementById("project-id");
  const projectId = parseInt(projectHiddenField.value);
  projects.splice(projectId, 1);
  if (projects.length === 0) {
    activeProject.project = createFirstProject();
  }
  activeProject.project = projects[0];
  refreshProjectDisplay(projects);
};

export { projects, createFirstProject, activateCreateProjectForm, refreshProjectDisplay,
         activateEditProjectForm, deleteProject, activeProject }
