/** @jsxImportSource @emotion/react */
import React from 'react';
import { css } from '@emotion/react';
import TodoItem from './TodoItem';

const todoItemList = css`
  padding-left: 20px;
`;
const todoItemWrapper = css`
  padding: 10px;
`;
const todoCount = css`
  padding: 10px;
`;
const todoItemCount = css`
  margin: 20px;
`;
const hrStyle = css`
  background-color: steelblue;
`;
const TodoItemList = () => {
  return (
    <section className="todo-item-list" css={todoItemWrapper}>
      <div css={todoCount}>
        <hr css={hrStyle} />
        <span className="todo-item-title" css={todoItemCount}>
          0개의 할 일이 남았습니다.
        </span>
        <hr css={hrStyle} />
      </div>
      <ul css={todoItemList}>
        <TodoItem />
        <TodoItem />
        <TodoItem />
      </ul>
    </section>
  );
};

export default TodoItemList;
