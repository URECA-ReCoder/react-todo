/** @jsxImportSource @emotion/react */
import { useState, useEffect } from 'react';
import { css } from '@emotion/react';
import TodoInput from './components/TodoInput';
import TodoList from './components/TodoList';
import TodoHeader from './components/TodoHeader';


const containerStyle = css`
  max-width: 400px;
  margin: 100px auto;
  padding: 20px;
  background: linear-gradient(135deg, #ff9a9e 0%, #fad0c4 100%);
  border-radius: 20px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
`;


function App() {
  const [todos, setTodos] = useState(() => {
    // 로컬 스토리지에서 저장된 todos 가져오기
    const savedTodos = localStorage.getItem('todos');
    return savedTodos ? JSON.parse(savedTodos) : []; // 저장된 값이 있으면 파싱하여 사용, 없으면 빈 배열
  });

  useEffect(() => {
    // todos 상태가 변경될 때마다 로컬 스토리지에 저장
    localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos]);

  // 새 할 일을 추가하는 함수
  const addTodo = (text) => {
    setTodos(todos.concat({ text, completed: false })); // 새로운 할 일을 기존 할 일 리스트에 추가
  };

  // 특정 인덱스의 할 일을 삭제하는 함수
  const deleteTodo = (index) => {
    setTodos(todos.filter((_, i) => i !== index)); // 해당 인덱스의 할 일을 제외하고 새로운 리스트 생성
  };

  // 특정 인덱스의 할 일의 완료 상태를 토글하는 함수
  const toggleTodo = (index) => {
    setTodos(todos.map((todo, i) =>
      i === index ? { ...todo, completed: !todo.completed } : todo
    )); // 할 일의 완료 상태를 반전시킴
  };

  return (
    <div css={containerStyle}>
      <TodoHeader /> 
      <TodoInput addTodo={addTodo} /> 
      <TodoList todos={todos} deleteTodo={deleteTodo} toggleTodo={toggleTodo} /> 
    </div>
  );
}

export default App; 
