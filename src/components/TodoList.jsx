/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import TodoItem from './TodoItem.jsx';

const listContainerStyle = css`
  width: 300px;
  max-width: 100%;
  margin: 0 auto;
`;

function TodoList({ todos, deleteTodo, toggleTodo }) {
  // 완료되지 않은 할 일만 필터링
  const pendingTodos = todos.filter((todo) => !todo.completed);
  // 완료된 할 일만 필터링
  const completedTodos = todos.filter((todo) => todo.completed);

  return (
    <div css={listContainerStyle}>
      <h3>{pendingTodos.length}개의 할일이 남아있어요</h3>
       {/* 남은 할 일 목록을 렌더링 */}
      {pendingTodos.map((todo, index) => (
        <TodoItem
          key={index}
          index={index}
          todo={todo}
          deleteTodo={deleteTodo}
          toggleTodo={toggleTodo}
        />
      ))}
      <h3>{completedTodos.length}개의 할일을 완료했어요</h3>
       {/* 완료한 할 일 목록을 렌더링 */}
      {completedTodos.map((todo, index) => (
        <TodoItem
          key={index}
          index={index}
          todo={todo}
          deleteTodo={deleteTodo}
          toggleTodo={toggleTodo}
        />
      ))}
    </div>
  );
}

export default TodoList;
