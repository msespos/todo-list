import { todoModalHandlers, projectModalHandlers } from './modalHandlers';
import { activateTodoForm } from './todoBuilder';
import { activateProjectForm, makeFirstProject, refreshProjectDisplay } from './projectBuilder';

let activeProject = makeFirstProject();
console.log(activeProject);
refreshProjectDisplay();
todoModalHandlers();
projectModalHandlers();
activateTodoForm();
activateProjectForm();

export { activeProject }
