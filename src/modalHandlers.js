const todoModalHandlers = () => {
  const modal = document.querySelector(".todo-modal");
  const closeButton = document.querySelector(".todo-close-button");
  const createTodoButton = document.querySelector("#create-todo-button");
  const editTodoButton = document.querySelector("#edit-todo-button");
  const toggleModal = () => {
    modal.classList.toggle("show-modal");
  }
  const windowOnClick = (event) => {
    if (event.target === modal) {
      toggleModal();
    }
  }
  closeButton.addEventListener("click", toggleModal);
  createTodoButton.addEventListener("click", toggleModal);
  editTodoButton.addEventListener("click", toggleModal);
  window.addEventListener("click", windowOnClick);
}

const projectModalHandlers = () => {
  const modal = document.querySelector(".project-modal");
  const trigger = document.querySelector(".project-trigger");
  const closeButton = document.querySelector(".project-close-button");
  const createProjectButton = document.querySelector("#project-button");
  const toggleModal = () => {
    modal.classList.toggle("show-modal");
  }
  const windowOnClick = (event) => {
    if (event.target === modal) {
      toggleModal();
    }
  }
  trigger.addEventListener("click", toggleModal);
  closeButton.addEventListener("click", toggleModal);
  createProjectButton.addEventListener("click", toggleModal);
  window.addEventListener("click", windowOnClick);
}

export { todoModalHandlers, projectModalHandlers }
