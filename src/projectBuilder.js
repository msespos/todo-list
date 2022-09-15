import { clearProjectTitleDisplay, displayProjectTitles } from './projectLayout';

const Project = (title, todos) => {
  return { title, todos }
};

let projects = [];

const makeProject = () => {
  const makeProjectButton = document.getElementById("make-project-button");
  makeProjectButton.onclick = () => {
    const project = Project(document.getElementById("project-title").value, []);
    projects.push(project);
    clearProjectTitleDisplay();
    displayProjectTitles(projects);
  }
};

export { makeProject }