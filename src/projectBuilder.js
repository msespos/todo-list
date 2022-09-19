import { clearProjectTitleDisplay, displayProjectTitles, displayNewTodoButton } from './projectLayout';

const Project = (title, todos) => {
  return { title, todos }
};

let projects = [];

const activateProjectForm = () => {
  const makeProjectButton = document.getElementById("make-project-button");
  makeProjectButton.onclick = () => {
    const project = Project(document.getElementById("project-title").value, []);
    projects.push(project);
    clearProjectTitleDisplay();
    displayProjectTitles(projects);
  }
};

export { activateProjectForm }