import { todoModalHandlers, projectModalHandlers } from './modalHandlers';
import { activateTodoForm } from './todoBuilder';
import { activateProjectForm, makeFirstProject, refreshProjectDisplay } from './projectBuilder';

let activeProject = { project: makeFirstProject(), index: 0 };
refreshProjectDisplay();
todoModalHandlers();
projectModalHandlers();
activateTodoForm();
activateProjectForm();

export { activeProject }
