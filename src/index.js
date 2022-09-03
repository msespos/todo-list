import { makeFirstTodo, makeTodo } from './todoBuilder';
import { modalLayout } from './modalLayout';
import { modalHandlers } from './modalHandlers';

const div = document.getElementById("content");
div.appendChild(modalLayout());

modalHandlers();
makeFirstTodo();
makeTodo();

