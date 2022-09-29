import { clearProjectDisplay, displayProjects } from './projectLayout';
import { projects } from './projectBuilder'
import { clearTodoTitleDisplay } from './todoLayout';
import { setDateToToday } from './setDateToToday';

const Todo = (title, description, dueDate, priority, notes) => {
  return { title, description, dueDate, priority, notes }
};

const activateTodoForm = () => {
  const makeTodoButton = document.getElementById("make-todo-button");
  makeTodoButton.onclick = () => {
    const todo = Todo(document.getElementById("todo-title").value,
                      document.getElementById("todo-description").value,
                      document.getElementById("todo-due-date").value,
                      document.getElementById("todo-priority").value,
                      document.getElementById("todo-notes").value);

    const hiddenField = document.getElementById("project-id");
    const projectId = hiddenField.value;
    projects[projectId].todos.push(todo);
    clearTodoTitleDisplay();
    clearProjectDisplay();
    displayProjects(projects);
    setDateToToday();
  };
};

export { activateTodoForm }
