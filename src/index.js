import { makeFirstTodo } from './todoBuilder';
import { modalLayout } from './modalLayout';
import { modalHandlers } from './modalHandlers';

makeFirstTodo();

const div = document.getElementById("content");
div.appendChild(modalLayout());

modalHandlers();
