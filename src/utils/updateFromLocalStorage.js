import { getLocalStorage } from './getLocalStorage';

export const updateFromLocalStorage = (id) => {
  const prevTodo = getLocalStorage();
  const newTodo = prevTodo.map((todo) => {
    return todo.id === id
      ? {
          ...todo,
          done: !todo.done,
        }
      : todo;
  });
  localStorage.setItem('todo', JSON.stringify(newTodo));
};
