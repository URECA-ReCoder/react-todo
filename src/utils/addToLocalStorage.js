import { getLocalStorage } from './getLocalStorage';

export const addToLocalStorage = (value) => {
  const prevTodo = getLocalStorage();
  const newTodo = prevTodo.concat({
    id: prevTodo.length + 1,
    todo: value,
    done: false,
  });
  localStorage.setItem('todo', JSON.stringify(newTodo));
};
