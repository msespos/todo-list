import { todoModalHandlers, projectModalHandlers } from './modalHandlers';
import { activateCreateTodoForm } from './todoBuilder';
import { activateCreateProjectForm, createFirstProject,
         refreshProjectDisplay, projects } from './projectBuilder';
import { setDateToToday } from './setDateToToday';

setDateToToday();
let activeProject = { project: createFirstProject(), index: 0 };
refreshProjectDisplay(projects);
todoModalHandlers();
projectModalHandlers();
activateCreateTodoForm();
document.getElementById("project-title").value = "";
activateCreateProjectForm();

export { activeProject }
