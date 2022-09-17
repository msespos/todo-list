import { todoModalHandlers, projectModalHandlers } from './modalHandlers';
import { activateTodoForm } from './todoBuilder';
import { activateProjectForm } from './projectBuilder';

projectModalHandlers();
todoModalHandlers();
activateTodoForm();
activateProjectForm();
