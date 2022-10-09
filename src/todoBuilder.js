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
  const createTodoButton = document.getElementById("create-todo-button");
  // code snippet below for disabling Enter key adapted from
  // https://tutorial.eyehunts.com/js/disable-enter-key-on-an-input-field-in-javascript-example-code/
  const titleTextField = document.getElementById("todo-title");
  titleTextField.addEventListener("keypress", function(event) {
    if (event.key === "Enter") {
      event.preventDefault();
    }
  });
  createTodoButton.onclick = () => {
    const todo = Todo(document.getElementById("todo-title").value,
                      document.getElementById("todo-description").value,
                      document.getElementById("todo-due-date").value,
                      getSelectedPriority(),
                      document.getElementById("todo-notes").value,
                      id());
    const hiddenField = document.getElementById("project-id");
    const projectId = parseInt(hiddenField.value);
    projects[projectId].todos.push(todo);
    displayReset(projects);
    createTodoButton.blur();
  };
};

const activateEditTodoForm = () => {
  const projectHiddenField = document.getElementById("project-id");
  const projectId = parseInt(projectHiddenField.value);
  const todoHiddenField = document.getElementById("edit-todo-id");
  const todoId = parseInt(todoHiddenField.value);
  const arrayIndexOfTodo = projects[projectId].todos.findIndex(e => e.id === todoId);
  const todo = projects[projectId].todos[arrayIndexOfTodo];
  const editTodoButton = document.getElementById("edit-todo-button");
  // code snippet below for disabling Enter key adapted from
  // https://tutorial.eyehunts.com/js/disable-enter-key-on-an-input-field-in-javascript-example-code/
  const titleTextField = document.getElementById("todo-title");
  titleTextField.addEventListener("keypress", function(event) {
    if (event.key === "Enter") {
      event.preventDefault();
    }
  });
  editTodoButton.onclick = () => {
    todo.title = document.getElementById("todo-title").value,
    todo.description = document.getElementById("todo-description").value,
    todo.dueDate = document.getElementById("todo-due-date").value,
    todo.priority = getSelectedPriority(),
    todo.notes = document.getElementById("todo-notes").value,
    projects[projectId].todos[arrayIndexOfTodo] = todo;
    displayReset(projects);
    editTodoButton.blur();
  };
};

const deleteTodo = () => {
  const projectHiddenField = document.getElementById("project-id");
  const projectId = parseInt(projectHiddenField.value);
  const todoHiddenField = document.getElementById("delete-todo-id");
  const todoId = parseInt(todoHiddenField.value);
  const arrayIndexOfTodo = projects[projectId].todos.findIndex(e => e.id === todoId);
  projects[projectId].todos.splice(arrayIndexOfTodo, 1);
  displayReset(projects);
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

const displayReset = (projects) => {
  clearTodoTitleDisplay();
  clearProjectDisplay();
  displayProjects(projects);
  setDateToToday();
};

export { activateCreateTodoForm, activateEditTodoForm, deleteTodo }
