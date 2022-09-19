import { todoModalHandlers, projectModalHandlers } from './modalHandlers';
import { activateTodoForm } from './todoBuilder';
import { activateProjectForm, makeFirstProject } from './projectBuilder';

makeFirstProject();
projectModalHandlers();
todoModalHandlers();
activateTodoForm();
activateProjectForm();
