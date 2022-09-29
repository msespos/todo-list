// code from https://bobbyhadz.com/blog/javascript-set-current-date-to-input

const setDateToToday = () => {
  const dateInput = document.getElementById('todo-due-date');
  dateInput.value = formatDate();
  dateInput.min = formatDate();
  function formatDate(date = new Date()) {
    return [
      date.getFullYear(),
      padTo2Digits(date.getMonth() + 1),
      padTo2Digits(date.getDate()),
    ].join('-');
  };
  function padTo2Digits(num) {
    return num.toString().padStart(2, '0');
  };
};

export { setDateToToday }