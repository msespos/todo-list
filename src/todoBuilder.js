const Todo = (title, description, dueDate, priority, notes) => {
  return { title, description, dueDate, priority, notes }
};

const makeFirstTodo = () => {
  const todo1 = Todo();
  todo1.title = "Make music"
  todo1.description = "Make some dang music";
  todo1.dueDate = "SOON"
  console.log(todo1.title, todo1.description, todo1.dueDate);
};

const makeTodo = () => {
  const makeTodoButton = document.getElementById("make-todo-button");
  makeTodoButton.onclick = () => {
    const todo = Todo(document.getElementById("title").value,
                      document.getElementById("description").value,
                      document.getElementById("dueDate").value,
                      document.getElementById("priority").value,
                      document.getElementById("notes").value)
    console.log(todo);
  }
}

export { makeFirstTodo, makeTodo }
