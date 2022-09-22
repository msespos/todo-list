import { todoModalHandlers } from './modalHandlers';
import { clearProjectDisplay, displayProjects } from './projectLayout';
import { Project, projects } from './projectBuilder'
import { clearTodoTitleDisplay } from './todoLayout';

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
    
    // NEED TO FIGURE OUT HOW TO GET AN INDEX TO PROJECTS AND TO TODOMODALHANDLERS

    projects[0].todos.push(todo);
    console.log(projects[0]);
    
    // NEED TO FIGURE OUT HOW TO GET AN INDEX TO PROJECTS AND TO TODOMODALHANDLERS

    todoModalHandlers(0);
    clearTodoTitleDisplay();
    clearProjectDisplay();
    displayProjects(projects);
  }
};

export { activateTodoForm }
