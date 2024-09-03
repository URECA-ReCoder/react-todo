import { getLocalStorage } from './getLocalStorage';

export const setLocalStorage = (value) => {
  const newTodo = getLocalStorage().concat({
    id: localStorage.getItem('todo').length + 1,
    todo: value,
    done: false,
  });
  console.log(newTodo);
  localStorage.setItem('todo', JSON.stringify(newTodo));
};
