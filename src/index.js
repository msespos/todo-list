import { todoModalHandlers, projectModalHandlers } from './modalHandlers';
import { activateCreateTodoForm } from './todoBuilder';
import { activateCreateProjectForm, createFirstProject,
         refreshProjectDisplay, projects } from './projectBuilder';
import { setDateToToday } from './setDateToToday';

setDateToToday();
let activeProject = null;
if (projects.length === 0) {
  activeProject = { project: createFirstProject(), index: 0 };
} else {
  activeProject = { project: projects[0], index: 0};
}
console.log(activeProject);
localStorage.setItem('projects', JSON.stringify(projects));
refreshProjectDisplay(projects);
todoModalHandlers();
projectModalHandlers();
activateCreateTodoForm();
activateCreateProjectForm();

export { activeProject }
