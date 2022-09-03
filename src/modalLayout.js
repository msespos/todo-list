const modalLayout = () => {
  const div = document.createElement("div");
  const btn = document.createElement("button");
  btn.classList.add("trigger");
  btn.textContent = "New Todo";
  const modalDiv = document.createElement("div");
  modalDiv.classList.add("modal");
  const modalContentDiv = document.createElement("div");
  modalContentDiv.classList.add("modal-content");
  const span = document.createElement("span");
  span.classList.add("close-button");
  span.textContent = "x";
  const form = document.createElement("form");
  const title = document.createElement("input");
  title.setAttribute("type", "text");
  title.setAttribute("name", "title");
  title.setAttribute("placeholder", "Title");
  title.id = "title";
  const description= document.createElement("input");
  description.setAttribute("type", "textarea");
  description.setAttribute("name", "description");
  description.setAttribute("placeholder", "Description");
  description.id = "description";
  const dueDate = document.createElement("input");
  dueDate.setAttribute("type", "text");
  dueDate.setAttribute("name", "dueDate");
  dueDate.setAttribute("placeholder", "Due Date");
  dueDate.id = "dueDate";
  const priority = document.createElement("input");
  priority.setAttribute("type", "text");
  priority.setAttribute("name", "priority");
  priority.setAttribute("placeholder", "Priority");
  priority.id = "priority";
  const notes = document.createElement("input");
  notes.setAttribute("type", "textarea");
  notes.setAttribute("name", "notes");
  notes.setAttribute("placeholder", "Notes");
  notes.id = "notes";
  var formButton = document.createElement("input");
  formButton.setAttribute("type", "button");
  formButton.setAttribute("value", "Create Todo");
  formButton.id = "make-todo-button";
  // title, description, dueDate, priority, notes, checklist
  //  <button type="button" id="save-settings-button" class="form-text">Save Game Settings</button>
  form.appendChild(title);
  form.appendChild(description);
  form.appendChild(dueDate);
  form.appendChild(priority);
  form.appendChild(notes);
  form.appendChild(formButton);
  modalDiv.appendChild(modalContentDiv);
  modalContentDiv.appendChild(span);
  modalContentDiv.appendChild(form);
  div.appendChild(btn);
  div.appendChild(modalDiv);
  return div;
}

export { modalLayout }
