import { clearTodoTitleDisplay, displayTodoTitles } from './todoLayout';

const Todo = (title, description, dueDate, priority, notes) => {
  return { title, description, dueDate, priority, notes }
};

let project = [];

const makeTodo = () => {
  const makeTodoButton = document.getElementById("make-todo-button");
  makeTodoButton.onclick = () => {
    const todo = Todo(document.getElementById("todo-title").value,
                      document.getElementById("todo-description").value,
                      document.getElementById("todo-due-date").value,
                      document.getElementById("todo-priority").value,
                      document.getElementById("todo-notes").value);
    project.push(todo);
    clearTodoTitleDisplay(project);
    displayTodoTitles(project);
  }
};

export { makeTodo }
