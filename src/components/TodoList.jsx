import TodoItem from './TodoItem';

/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';

function TodoList({ todos, toggleTodo, deleteTodo }) {
  return (
    <ul
      css={css({
        marginBottom: '20px',
      })}
    >
      {todos.map((todo) => (
        <TodoItem
          key={todo.id}
          todo={todo}
          toggleTodo={toggleTodo}
          deleteTodo={deleteTodo}
        />
      ))}
    </ul>
  );
}

export default TodoList;
