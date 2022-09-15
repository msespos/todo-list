import { makeTodo } from './todoBuilder';
//import { modalLayout } from './modalLayout';
import { projectModalHandlers, todoModalHandlers } from './modalHandlers';
import { makeProject } from './projectBuilder';

//const div = document.getElementById("content");
//div.appendChild(modalLayout());

projectModalHandlers();
todoModalHandlers();
makeTodo();
makeProject();
