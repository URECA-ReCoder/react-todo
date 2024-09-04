/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import TodoListSection from './TodoListSection';


const listContainerStyle = css`
  width: 300px;
  max-width: 100%;
  margin: 0 auto;
`;

function TodoList({ todos, deleteTodo, toggleTodo }) {
  const pendingTodos = todos.filter((todo) => !todo.completed); // 완료되지 않은 할 일만 필터링
  const completedTodos = todos.filter((todo) => todo.completed); // 완료된 할 일만 필터링

  return (
    <div css={listContainerStyle}>
      {/* TO DO 섹션 */}
      <TodoListSection
        title="🗒️ TO DO"
        todos={pendingTodos}
        deleteTodo={deleteTodo}
        toggleTodo={toggleTodo}
      />
      {/* DONE 섹션 */}
      <TodoListSection
        title="💿 DONE"
        todos={completedTodos}
        deleteTodo={deleteTodo}
        toggleTodo={toggleTodo}
      />
    </div>
  );
}

export default TodoList; 
