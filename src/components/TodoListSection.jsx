/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import TodoItem from './TodoItem';

const sectionStyle = css`
  margin-bottom: 20px;
`;

function TodoListSection({ title, todos, deleteTodo, toggleTodo }) {
  return (
    <div css={sectionStyle}>
      <h3>{title} ({todos.length})</h3>
      {todos.map((todo, index) => (
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

export default TodoListSection;
