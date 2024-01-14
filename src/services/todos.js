export const retrieveTodoList = () => {
  return JSON.parse(localStorage.getItem("todoList")) || [];
};

export const saveTodoList = (todoList) => {
  localStorage.setItem("todoList", JSON.stringify(todoList));
};
