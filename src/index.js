import { todoModalHandlers, projectModalHandlers } from './modalHandlers';
import { activateTodoForm } from './todoBuilder';
import { makeProject } from './projectBuilder';

projectModalHandlers();
todoModalHandlers();
activateTodoForm();
makeProject();
