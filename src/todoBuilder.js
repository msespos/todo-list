import { clearProjectDisplay, displayProjects } from './projectLayout';
import { projects } from './projectBuilder'
import { clearTodoTitleDisplay } from './todoLayout';
import { setDateToToday } from './setDateToToday';

const Todo = (title, description, dueDate, priority, notes, id) => {
  return { title, description, dueDate, priority, notes, id }
};

// makeCounter adapted from
// https://stackoverflow.com/questions/5690723/how-should-i-generate-unique-ids-for-a-bunch-of-objects
const makeCounter = () => {
  let i = 0;
  const incrementCounter = () => {
    return i++;
  }
  return incrementCounter;
}

let id = makeCounter();

const activateCreateTodoForm = () => {
  const createTodoButton = document.getElementById("todo-button");
  createTodoButton.onclick = () => {
    const todo = Todo(document.getElementById("todo-title").value,
                      document.getElementById("todo-description").value,
                      document.getElementById("todo-due-date").value,
                      getSelectedPriority(),
                      document.getElementById("todo-notes").value,
                      id());
    const hiddenField = document.getElementById("project-id");
    const projectId = hiddenField.value;
    projects[projectId].todos.push(todo);
    clearTodoTitleDisplay();
    clearProjectDisplay();
    displayProjects(projects);
    setDateToToday();
  };
};

const activateEditTodoForm = () => {
  const projectHiddenField = document.getElementById("project-id");
  const projectId = projectHiddenField.value;
  const todoHiddenField = document.getElementById("todo-id");
  const todoId = todoHiddenField.value;
  const todo = projects[projectId].todos[todoId];
  const editTodoButton = document.getElementById("todo-button");
  editTodoButton.onclick = () => {
    todo.title = document.getElementById("todo-title").value,
    todo.description = document.getElementById("todo-description").value,
    todo.dueDate = document.getElementById("todo-due-date").value,
    todo.priority = getSelectedPriority(),
    todo.notes = document.getElementById("todo-notes").value,
    projects[projectId].todos[todoId] = todo;
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

export { activateCreateTodoForm, activateEditTodoForm }
