/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import React, { Component, useState } from 'react';
import TodoInput from './TodoInput';
import TodoItemList from './TodoItemList';

const todoTemplete = css`
  width: 350px;
  height: 700px;
  display: flex;
  flex-direction: column;
  border: 0.5px solid steelblue;
  border-radius: 15px;
`;

const TodoTemplete = () => {
  const [todoList, setTodoList] = useState([]);

  return (
    <div className="todo-templete" css={todoTemplete}>
      {/* Todo item을 추가  */}
      <TodoInput todoList={todoList} setTodoList={setTodoList} />

      {/* 할 일 Item 리스트 */}
      <TodoItemList />

      {/* 완료된 할 일 Item 리스트 */}
      <TodoItemList />
    </div>
  );
};

export default TodoTemplete;
