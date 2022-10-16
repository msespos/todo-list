import { displayTodoTitles } from './todoLayout';
import { activeProject } from './index.js';
import { refreshProjectDisplay, deleteProject, activateEditProjectForm } from './projectBuilder';

const clearProjectDisplay = () => {
  const titles = document.querySelectorAll('.project-title');
  titles.forEach((title) => {
    title.remove();
  });
};

const displayProjects = (projects) => {
  clearActiveProject();
  displayActiveProject();
  clearNewTodoButton();
  displayNewTodoButton();
  displayInactiveProjects(projects);
};

const clearActiveProject = () => {
  const project = document.querySelector('.active-project');
  while (project.firstChild) {
    project.removeChild(project.firstChild);
  }
};

const clearNewTodoButton = () => {
  if (document.querySelector('.new-todo-button')) {
    const button = document.querySelector('.new-todo-button');
    button.remove();
  }
};

const displayActiveProject = () => {
  const activeProjectDiv = document.querySelector('.active-project');
  const activeProjectTitle = document.createElement('h2');
  activeProjectTitle.textContent = activeProject.project.title;
  activeProjectDiv.appendChild(activeProjectTitle);
  displayTodoTitles(activeProject.project);
  const editButton = document.createElement('button');
  const modal = document.querySelector('.project-modal');
  const toggleModal = () => {
    modal.classList.toggle('show-modal');
  };
  editButton.classList.add('edit-project-button');
  editButton.textContent = 'Edit Project Title';
  editButton.onclick = () => {
    document.getElementById('create-project-button').style.display = 'none';
    document.getElementById('edit-project-button').style.display = 'block';
    document.getElementById('edit-project-id').value = activeProject.index;
    activateEditProjectForm();
    toggleModal();
    document.getElementById('project-title').focus();
  };
  activeProjectDiv.appendChild(editButton);
  const deleteButton = document.createElement('button');
  deleteButton.classList.add('delete-project-button');
  deleteButton.textContent = 'Delete Project';
  deleteButton.onclick = () => {
    if (confirm('Are you sure you want to delete this project?')) {
      deleteProject();
    }
  };
  activeProjectDiv.appendChild(deleteButton);
};

const displayNewTodoButton = () => {
  const div = document.querySelector('.active-projects-todos');
  const trigger = document.createElement('button');
  trigger.textContent = 'New Todo';
  trigger.classList.add('new-todo-button');
  div.appendChild(trigger);
  const modal = document.querySelector('.todo-modal');
  const toggleModal = () => {
    modal.classList.toggle('show-modal');
  };
  trigger.onclick = () => {
    document.getElementById('todo-title').value = '';
    document.getElementById('todo-description').value = '';
    document.getElementById('medium-priority').checked = true;
    document.getElementById('todo-notes').value = '';
    document.getElementById('create-todo-button').style.display = 'block';
    document.getElementById('edit-todo-button').style.display = 'none';
    document.getElementById('create-project-id').value = activeProject.index;
    toggleModal();
    document.getElementById('todo-title').focus();
  };
};

const displayInactiveProjects = (projects) => {
  projects.forEach((project, index) => {
    const div = document.querySelector('.sidebar');
    const title = document.createElement('h3');
    title.classList.add('project-title');
    title.id = `project-title-${index}`;
    title.textContent = project.title;
    div.appendChild(title);
    title.onclick = () => {
      activeProject.project = project;
      activeProject.index = index;
      refreshProjectDisplay(projects);
    };
  });
};

export { clearProjectDisplay, displayProjects, activeProject };
