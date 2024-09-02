/** @jsxImportSource @emotion/react */
import { useState, useEffect } from 'react';
import { css } from '@emotion/react';
import TodoInput from './components/TodoInput';
import TodoList from './components/TodoList';

const containerStyle = css`
  max-width: 400px;
  margin: 100px auto;
  padding: 20px;
  background: linear-gradient(135deg, #ff9a9e 0%, #fad0c4 100%);
  border-radius: 20px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
`;

const titleStyle = css`
  font-size: 24px;
  text-align: center;
  margin-bottom: 20px;
`;

function App() {
  const [todos, setTodos] = useState(() => {
    // 로컬 스토리지에서 저장된 todos 가져오기
    const savedTodos = localStorage.getItem('todos');
    return savedTodos ? JSON.parse(savedTodos) : [];
  });

  useEffect(() => {
    // todos 상태가 변경될 때마다 로컬 스토리지에 저장
    localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos]);

  // 컴포넌트 렌더링
  return (
    <div css={containerStyle}>
      <h1 css={titleStyle}>투두리스트</h1>
      <TodoInput addTodo={addTodo} />
      <TodoList todos={todos} deleteTodo={deleteTodo} toggleTodo={toggleTodo} />
    </div>
  );
}

export default App;
