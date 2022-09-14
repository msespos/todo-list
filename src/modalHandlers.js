const todoModalHandlers = () => {
  const modal = document.querySelector(".todo-modal");
  const trigger = document.querySelector(".trigger");
  const closeButton = document.querySelector(".close-button");
  const makeTodoButton = document.querySelector("#make-todo-button")
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
  makeTodoButton.addEventListener("click", toggleModal);
  window.addEventListener("click", windowOnClick);  
}

export { todoModalHandlers }
