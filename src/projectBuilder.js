import { clearProjectDisplay, displayProjects } from './projectLayout';
import { clearTodoTitleDisplay } from './todoLayout';

const Project = (title, todos) => {
  return { title, todos }
};

let projects = [];

const createFirstProject = () => {
  const project = Project("Default Project", []);
  projects.push(project);
  return project;
}

const refreshProjectDisplay = () => {
  clearTodoTitleDisplay();
  clearProjectDisplay();
  displayProjects(projects);
}

const activateCreateProjectForm = () => {
  const createProjectButton = document.getElementById("project-button");
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
    refreshProjectDisplay();
    createProjectButton.blur();
  }
};

export { projects, createFirstProject, activateCreateProjectForm, refreshProjectDisplay }
