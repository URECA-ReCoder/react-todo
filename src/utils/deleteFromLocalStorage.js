import { getLocalStorage } from './getLocalStorage';

export const deleteFromLocalStorage = (id) => {
  const prevTodo = getLocalStorage();
  const newTodo = prevTodo.filter((todo) => todo.id !== id);
  localStorage.setItem('todo', JSON.stringify(newTodo));
  alert('삭제되었습니다.');
};
