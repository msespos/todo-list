import { format } from 'date-fns'

const setDateToToday = () => {
  const dateInput = document.getElementById('todo-due-date');
  dateInput.value = format(new Date(), "yyyy-MM-dd");
  dateInput.min = format(new Date(), "yyyy-MM-dd");
};

export { setDateToToday }