{/* <button class="trigger">New Todo</button>
  <div class="modal">
    <div class="modal-content">
      <span class="close-button">&times;</span>
      <h1>This is where the todo form will go.</h1>
    </div>
  </div> */}

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
  const formStandIn = document.createElement("h1");
  formStandIn.textContent = "This is where the todo form will go.";
  modalDiv.appendChild(modalContentDiv);
  modalContentDiv.appendChild(span);
  modalContentDiv.appendChild(formStandIn);
  div.appendChild(btn);
  div.appendChild(modalDiv);
  return div;
}

export { modalLayout }
