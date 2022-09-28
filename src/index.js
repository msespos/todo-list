import { todoModalHandlers, projectModalHandlers } from './modalHandlers';
import { activateTodoForm } from './todoBuilder';
import { activateProjectForm, makeFirstProject, refreshProjectDisplay } from './projectBuilder';

let activeProject = makeFirstProject();
refreshProjectDisplay();
todoModalHandlers();
projectModalHandlers();
activateTodoForm();
activateProjectForm();

export { activeProject }
