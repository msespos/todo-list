import { todoModalHandlers, projectModalHandlers } from './modalHandlers';
import { makeTodo } from './todoBuilder';
import { makeProject } from './projectBuilder';

projectModalHandlers();
todoModalHandlers();
makeTodo();
makeProject();
