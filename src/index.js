import { todoModalHandlers, projectModalHandlers } from './modalHandlers';
import { activateCreateTodoForm } from './todoBuilder';
import { activateCreateProjectForm, createFirstProject, refreshProjectDisplay } from './projectBuilder';
import { setDateToToday } from './setDateToToday';

setDateToToday();
let activeProject = { project: createFirstProject(), index: 0 };
refreshProjectDisplay();
todoModalHandlers();
projectModalHandlers();
activateCreateTodoForm();
activateCreateProjectForm();

export { activeProject }
