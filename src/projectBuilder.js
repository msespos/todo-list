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
  createProjectButton.onclick = () => {
    const project = Project(document.getElementById("project-title").value, []);
    projects.push(project);
    refreshProjectDisplay();
  }
};

export { projects, createFirstProject, activateCreateProjectForm, refreshProjectDisplay }
