import { clearProjectTitleDisplay, displayProjectTitles } from './projectLayout';

const Project = (title, todos) => {
  return { title, todos }
};

let projects = [];

const makeFirstProject = () => {
  const project = Project("Default Project", []);
  projects.push(project);
  clearProjectTitleDisplay();
  displayProjectTitles(projects);
}

const activateProjectForm = () => {
  const makeProjectButton = document.getElementById("make-project-button");
  makeProjectButton.onclick = () => {
    const project = Project(document.getElementById("project-title").value, []);
    projects.push(project);
    clearProjectTitleDisplay();
    displayProjectTitles(projects);
  }
};

export { Project, makeFirstProject, activateProjectForm }
