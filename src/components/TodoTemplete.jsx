/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import React, { Component, useState, useEffect } from 'react';
import TodoInput from './TodoInput';
import TodoItemList from './TodoItemList';

const todoTemplete = css`
  width: 350px;
  height: 700px;
  display: flex;
  flex-direction: column;
  background-color: white;
  border: 0.5px solid steelblue;
  border-radius: 15px;
  box-shadow: 0 0 25px rgba(0, 0, 0, 0.25);
`;

const TodoTemplete = () => {
  // 처음 컴포넌트 렌더링될 때 로컬 스토리지에서 할 일 목록 불러오기
  const [todoList, setTodoList] = useState(() => {
    const savedTodoList = localStorage.getItem('todoList');
    return savedTodoList ? JSON.parse(savedTodoList) : [];
  });

  // todoList가 변경될 때마다 로컬 스토리지에 저장
  useEffect(() => {
    localStorage.setItem('todoList', JSON.stringify(todoList));
  }, [todoList]);

  // 할 일 카운팅
  const getTodoCount = () => {
    return todoList.filter((todo) => !todo.checked && !todo.deleted).length;
  };

  // 완료된 할 일 카운팅
  const getDoneCount = () => {
    return todoList.filter((todo) => todo.checked && !todo.deleted).length;
  };

  return (
    <div className="todo-templete" css={todoTemplete}>
      {/* Todo item을 추가  */}
      <TodoInput todoList={todoList} setTodoList={setTodoList} />

      {/* 할 일 Item 리스트 */}
      <TodoItemList
        title={`📋 TO DO (${getTodoCount()})`}
        todoList={todoList}
        setTodoList={setTodoList}
        checkedList={false} // 체크되지 않은 할 일 목록
      />

      {/* 완료된 할 일 Item 리스트 */}
      <TodoItemList
        title={`💿 DONE (${getDoneCount()})`}
        todoList={todoList}
        setTodoList={setTodoList}
        checkedList={true} // 체크되어 있는 할 일 목록
      />
    </div>
  );
};

export default TodoTemplete;
