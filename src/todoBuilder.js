import { clearProjectDisplay, displayProjects } from './projectLayout';
import { projects } from './projectBuilder'
import { clearTodoTitleDisplay } from './todoLayout';
import { setDateToToday } from './setDateToToday';

const Todo = (title, description, dueDate, priority, notes) => {
  return { title, description, dueDate, priority, notes }
};

const activateCreateTodoForm = () => {
  const createTodoButton = document.getElementById("todo-button");
  createTodoButton.onclick = () => {
    const todo = Todo(document.getElementById("todo-title").value,
                      document.getElementById("todo-description").value,
                      document.getElementById("todo-due-date").value,
                      getSelectedPriority(),
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

const getSelectedPriority = () => {
  const priorities = document.getElementsByName("todo-priority");
  let selectedPriority = null;
  priorities.forEach((priority) => {
    if (priority.checked) {
      selectedPriority = priority.value;
    }
  });
  return selectedPriority;
};

export { activateCreateTodoForm }
