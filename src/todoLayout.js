import { activeProject } from './index.js';
import { activateEditTodoForm, deleteTodo } from './todoBuilder.js';
import { format } from 'date-fns';

const clearTodoTitleDisplay = () => {
  const titles = document.querySelectorAll('.todo-title');
  titles.forEach((title) => {
    title.remove();
  });
}

const displayTodoTitles = (project) => {
  project.todos.forEach((todo, index) => {
    const div = document.querySelector(".active-projects-todos");
    const container = document.createElement("div");
    container.classList.add("todo-and-button-container");
    div.appendChild(container);
    const title = document.createElement("div");
    title.id = "todo-title-" + index;
    title.textContent = todo.title;
    title.classList.add("active-project-todo");
    title.classList.add("todo-title");
    container.appendChild(title);
    const priority = document.createElement("div");
    priority.textContent = "Priority: " + todo.priority;
    priority.classList.add("priority-indicator");
    if (todo.priority === "High") {
      priority.classList.add("high-priority-indicator");
    } else if (todo.priority === "Medium") {
      priority.classList.add("medium-priority-indicator");
    } else {
      priority.classList.add("low-priority-indicator");
    }
    const toggleButton = document.createElement("button");
    toggleButton.textContent = "Show/Hide Todo";
    toggleButton.classList.add("todo-show-hide-button");
    toggleButton.classList.add("todo-title");
    toggleButton.onclick = () => {
      toggleTodo(todo, index);
    }
    container.appendChild(toggleButton);
    const completedButton = document.createElement("button");
    if (todo.completed === false) {
      completedButton.textContent = "Mark Completed";
      title.appendChild(priority);
      title.classList.remove("completed-title");
    } else {
      completedButton.textContent = "Mark Incomplete";
      title.textContent = todo.title + " - COMPLETED";
      title.classList.add("completed-title");
    }
    completedButton.classList.add("todo-show-hide-button");
    completedButton.classList.add("todo-title");
    completedButton.onclick = () => {
      if (todo.completed === false) {
        todo.completed = true;
        completedButton.textContent = "Mark Incomplete";
        title.textContent = todo.title + " - COMPLETED";
        title.classList.add("completed-title");
      } else {
        todo.completed = false;
        completedButton.textContent = "Mark Completed";
        title.textContent = todo.title;
        title.appendChild(priority);
        title.classList.remove("completed-title");
      }
    }
    container.appendChild(completedButton);
  });
};

const toggleTodo = (todo, index) => {
  if (document.querySelector(".todo-" + index)) {
    clearTodo(index);
  } else {
    displayTodo(todo, index);
  }
};

const clearTodo = (index) => {
  const todoElements = document.querySelectorAll(".todo-" + index);
  todoElements.forEach((todoElement) => {
    todoElement.remove();
  });
}

// toDate function adapted from https://stackoverflow.com/questions/7151543/convert-dd-mm-yyyy-string-to-date
const toDate = (dateStr) => {
  const [year, month, day] = dateStr.split("-")
  return new Date(year, month - 1, day)
}

const displayTodo = (todo, index) => {
  const div = document.getElementById("todo-title-" + index);
  const todoAttributesDiv = document.createElement("div");
  todoAttributesDiv.classList.add("todo-" + index);
  todoAttributesDiv.classList.add("todo-attribute");
  const dueDate = document.createElement("div");
  dueDate.textContent = "Due Date: " + format(toDate(todo.dueDate), "EEE',' MMM d',' yyyy");
  dueDate.classList.add("todo-" + index);
  dueDate.classList.add("todo-attribute");
  todoAttributesDiv.appendChild(dueDate);
  const todoAttributes = [todo.description, todo.notes];
  todoAttributes.forEach((todoAttribute) => {
    const attribute = document.createElement("div");
    attribute.textContent = todoAttribute;
    attribute.classList.add("todo-" + index);
    attribute.classList.add("todo-attribute");
    todoAttributesDiv.appendChild(attribute);
  });
  const buttonsDiv = document.createElement("div");
  buttonsDiv.classList.add("todo-" + index);
  buttonsDiv.classList.add("todo-edit-and-delete-buttons");
  const editButton = document.createElement("button");
  editButton.id = "todo-edit-button";
  const modal = document.querySelector(".todo-modal");
  const toggleModal = () => {
    modal.classList.toggle("show-modal");
  };
  editButton.classList.add("todo-" + index);
  editButton.textContent = "Edit Todo";
  const currentTodo = activeProject.project.todos.find(e => e.id === todo.id);
  editButton.onclick = () => {
    document.getElementById("create-todo-button").style.display = "none";
    document.getElementById("edit-todo-button").style.display = "block";
    document.getElementById("todo-title").value = currentTodo.title;
    document.getElementById("todo-description").value = currentTodo.description;
    document.getElementById("todo-due-date").value = currentTodo.dueDate;
    if (currentTodo.priority === "High") {
      document.getElementById("high-priority").checked = true;
    } else if (currentTodo.priority === "Medium") {
      document.getElementById("medium-priority").checked = true;
    } else {
      document.getElementById("low-priority").checked = true;
    }
    document.getElementById("todo-notes").value = currentTodo.notes;
    document.getElementById("edit-todo-id").value = currentTodo.id;
    activateEditTodoForm();
    toggleModal();
    document.getElementById("todo-title").focus();
  };
  buttonsDiv.appendChild(editButton);
  const deleteButton = document.createElement("button");
  deleteButton.id = "todo-delete-button";
  deleteButton.classList.add("todo-" + index);
  deleteButton.textContent = "Delete todo";
  deleteButton.onclick = (e) => {
    if (confirm("Are you sure you want to delete this todo?")) {
      const hiddenField = document.getElementById("delete-todo-id");
      hiddenField.value = currentTodo.id;
      e.stopPropagation();
      deleteTodo();
    }
  };
  buttonsDiv.appendChild(deleteButton);
  div.append(todoAttributesDiv, buttonsDiv);
};

export { clearTodoTitleDisplay, displayTodoTitles, toggleTodo }
