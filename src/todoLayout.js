import { activeProject } from './index.js';
import { activateEditTodoForm, deleteTodo } from './todoBuilder.js';

const clearTodoTitleDisplay = () => {
  const titles = document.querySelectorAll('.todo-title');
  titles.forEach((title) => {
    title.remove();
  });
}

const displayTodoTitles = (project) => {
  project.todos.forEach((todo, index) => {
    const div = document.querySelector(".active-projects-todos");
    const title = document.createElement("div");
    title.classList.add("active-project-todo");
    title.classList.add("todo-title");
    title.id = "todo-title-" + index;
    title.textContent = todo.title;
    div.appendChild(title);
    title.onclick = () => {
      toggleTodo(todo, index);
    }
  });
};

const toggleTodo = (todo, index) => {
  if (document.querySelector(".todo")) {
    clearTodo();
  } else {
    displayTodo(todo, index);
  }
};

const clearTodo = () => {
  const todoElements = document.querySelectorAll(".todo");
  todoElements.forEach((todoElement) => {
    todoElement.remove();
  });
}

const displayTodo = (todo, index) => {
  const div = document.getElementById("todo-title-" + index);
  const todoAttributes = [todo.description, todo.dueDate, todo.priority, todo.notes];
  todoAttributes.forEach((todoAttribute) => {
    const attribute = document.createElement("div");
    attribute.textContent = todoAttribute;
    attribute.classList.add("todo");
    div.appendChild(attribute);
  });
  const editButton = document.createElement("button");
  const modal = document.querySelector(".todo-modal");
  const toggleModal = () => {
    modal.classList.toggle("show-modal");
  };
  editButton.classList.add("todo");
  editButton.textContent = "Edit Todo";
  editButton.onclick = () => {
    const currentTodo = activeProject.project.todos.find(obj => obj.id === todo.id);
    const title = document.getElementById("todo-title");
    title.value = currentTodo.title;
    const description = document.getElementById("todo-description");
    description.value = currentTodo.description;
    const dueDate = document.getElementById("todo-due-date");
    dueDate.value = currentTodo.dueDate;
    if (currentTodo.priority === "high") {
      const highPriority = document.getElementById("high-priority");
      highPriority.checked = true;
    } else if (currentTodo.priority === "medium") {
      const mediumPriority = document.getElementById("medium-priority");
      mediumPriority.checked = true;
    } else {
      const lowPriority = document.getElementById("low-priority");
      lowPriority.checked = true;
    }
    const notes = document.getElementById("todo-notes");
    notes.value = currentTodo.notes;
    const hiddenField = document.getElementById("todo-id");
    hiddenField.value = currentTodo.id;
    const btn = document.getElementById("todo-button");
    btn.value = "Save Edits";
    activateEditTodoForm();
    toggleModal();
  };
  div.appendChild(editButton);
  const deleteButton = document.createElement("button");
  deleteButton.id = "todo-delete-button";
  deleteButton.classList.add("todo");
  deleteButton.textContent = "Delete todo";
  deleteButton.onclick = (e) => {
    e.stopPropagation();
    deleteTodo();
  };
  div.appendChild(deleteButton);
};

export { clearTodoTitleDisplay, displayTodoTitles }
