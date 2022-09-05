const Todo = (title, description, dueDate, priority, notes) => {
  return { title, description, dueDate, priority, notes }
};

let project = [];

const makeTodo = () => {
  const makeTodoButton = document.getElementById("make-todo-button");
  makeTodoButton.onclick = () => {
    const todo = Todo(document.getElementById("title").value,
                      document.getElementById("description").value,
                      document.getElementById("dueDate").value,
                      document.getElementById("priority").value,
                      document.getElementById("notes").value)
    project.push(todo);
    console.log(project);
  }
}

export { makeTodo, project }
