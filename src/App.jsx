import { useState, useEffect } from 'react';
import './App.css';
import TodoInput from './components/TodoInput';
import TodoList from './components/TodoList';

function App() {
  // 로컬 스토리지에서 저장된 할 일 목록 불러오기
  const [todos, setTodos] = useState(() => {
    const savedTodos = localStorage.getItem('todos');
    return savedTodos ? JSON.parse(savedTodos) : [];
  });

  // 할 일 목록이 변경될 때마다 로컬 스토리지에 저장
  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos]);

  const addTodo = (text) => {
    const newTodo = { id: Date.now(), text, completed: false }; //id에 고유한 숫자를 부여하기 위해서 Dat.now() 사용
    setTodos([...todos, newTodo]);
  };

  const toggleTodo = (id) => {
    const updatedTodos = todos.map((todo) =>
      todo.id === id ? { ...todo, completed: !todo.completed } : todo
    );
    setTodos(updatedTodos);
  };

  const deleteTodo = (id) => {
    const filteredTodos = todos.filter((todo) => todo.id !== id);
    setTodos(filteredTodos);
  };

  const activeTodos = todos.filter((todo) => !todo.completed);
  const completedTodos = todos.filter((todo) => todo.completed);

  return (
    <div className="App">
      <div className="todo-container">
        <h1>투두리스트</h1>
        <TodoInput addTodo={addTodo} />
        <h2>{activeTodos.length}개의 할일이 남아있어요</h2>
        <TodoList
          todos={activeTodos}
          toggleTodo={toggleTodo}
          deleteTodo={deleteTodo}
        />
        <h2>{completedTodos.length}개의 할일을 완료했어요</h2>
        <TodoList
          todos={completedTodos}
          toggleTodo={toggleTodo}
          deleteTodo={deleteTodo}
        />
      </div>
    </div>
  );
}

export default App;
