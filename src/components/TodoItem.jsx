/** @jsxImportSource @emotion/react */
import React from 'react';
import { css } from '@emotion/react';

function TodoItem({ todo, toggleTodo, deleteTodo }) {
  return (
    <li
      css={css({
        display: 'flex',
        justifyContent: 'flex',
        alignItems: 'center',
        padding: '10px',
        gap: '10px', // 요소들 사이의 간격을 설정
      })}
    >
      <span
        style={{
          textDecoration: todo.completed ? 'line-through' : 'none',
          color: todo.completed ? 'gray' : 'rgb(61, 61, 61)',
          cursor: 'pointer',
        }}
        onClick={() => toggleTodo(todo.id)}
      >
        {todo.text}
      </span>
      <button
        css={css({
          background: 'none',
          border: 'none',
          color: '#e74c3c',
          fontSize: '16px',
          cursor: 'pointer',
        })}
        onClick={() => {
          deleteTodo(todo.id);
        }}
      >
        🗑️
      </button>
    </li>
  );
}

export default TodoItem;
