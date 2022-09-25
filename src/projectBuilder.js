import { clearProjectDisplay, displayProjects } from './projectLayout';
import { clearTodoTitleDisplay } from './todoLayout';

const Project = (title, todos) => {
  return { title, todos }
};

let projects = [];

const makeFirstProject = () => {
  const project = Project("Default Project", []);
  projects.push(project);
  clearProjectDisplay();
  displayProjects(projects);
}

const activateProjectForm = () => {
  const makeProjectButton = document.getElementById("make-project-button");
  makeProjectButton.onclick = () => {
    const project = Project(document.getElementById("project-title").value, []);
    projects.push(project);
    clearTodoTitleDisplay();
    clearProjectDisplay();
    displayProjects(projects);
  }
};

export { projects, makeFirstProject, activateProjectForm }
