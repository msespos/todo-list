import { clearProjectDisplay, displayProjects } from './projectLayout';
import { clearTodoTitleDisplay } from './todoLayout';

const Project = (title, todos) => {
  return { title, todos }
};

let projects = [];

const makeFirstProject = () => {
  const project = Project("Default Project", []);
  projects.push(project);
  return project;
}

const refreshProjectDisplay = () => {
  clearTodoTitleDisplay();
  clearProjectDisplay();
  displayProjects(projects);
}

const activateProjectForm = () => {
  const makeProjectButton = document.getElementById("make-project-button");
  makeProjectButton.onclick = () => {
    const project = Project(document.getElementById("project-title").value, []);
    projects.push(project);
    refreshProjectDisplay();
  }
};

export { projects, makeFirstProject, activateProjectForm, refreshProjectDisplay }
