const Todo = (title, description, dueDate, priority, notes, checklist) => {
  return { title, description, dueDate, priority, notes, checklist }
};

const makeFirstTodo = () => {
  const todo1 = Todo();
  todo1.title = "Make music";
  todo1.description = "Make some dang music";
  console.log(todo1.title, todo1.description);
};

export { makeFirstTodo }