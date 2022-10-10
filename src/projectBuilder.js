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
  // code snippet below for disabling Enter key adapted from
  // https://tutorial.eyehunts.com/js/disable-enter-key-on-an-input-field-in-javascript-example-code/
  const titleTextField = document.getElementById("project-title");
  titleTextField.addEventListener("keypress", function(event) {
    if (event.key === "Enter") {
      event.preventDefault();
    }
  });
  createProjectButton.onclick = () => {
    let title = document.getElementById("project-title").value;
    if (title === "") {
      alert("You need a title! Please try again.");
    } else {
      const project = Project(title, []);
      projects.push(project);
      activeProject.project = project;
      activeProject.index = projects.findIndex(e => e === project);
      refreshProjectDisplay(projects);
      createProjectButton.blur();
    }
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
    let titleTextField = document.getElementById("project-title");
    if (titleTextField.value === "") {
      alert("You need a new title! Please try again.");
    } else {
      project.title = titleTextField.value;
      projects[projectId] = project;
      refreshProjectDisplay(projects);
      editProjectButton.blur();
    }
    titleTextField.value = "";
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
};

export { projects, createFirstProject, activateCreateProjectForm, refreshProjectDisplay,
         activateEditProjectForm, deleteProject, activeProject }
