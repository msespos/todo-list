import { makeTodo } from './todoBuilder';
//import { modalLayout } from './modalLayout';
import { projectModalHandlers, todoModalHandlers } from './modalHandlers';

//const div = document.getElementById("content");
//div.appendChild(modalLayout());

projectModalHandlers();
todoModalHandlers();
makeTodo();
