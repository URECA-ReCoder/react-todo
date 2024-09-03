/** @jsxImportSource @emotion/react */
import React from 'react';
import { css } from '@emotion/react';
import TodoItem from './TodoItem';
import PropTypes from 'prop-types';

const todoItemWrapper = css`
  display: inline-block;
  height: 40%;
  padding: 0 20px 0;
`;
const todoItemList = css`
  margin-top: 40px;
  padding-left: 20px;
  height: 60%;
  overflow: auto;
`;
const todoItemTitle = css`
  margin: 10px;
`;
const line = css`
  margin-bottom: 10px;
  color: lightgray;
`;

const TodoItemList = ({ title, todoList, setTodoList, checkedList }) => {
  return (
    <section className="todo-item-list" css={todoItemWrapper}>
      <div>
        <hr css={line} />
        <span className="todo-item-title" css={todoItemTitle}>
          {title}
        </span>
        <hr css={line} />
      </div>
      <ul css={todoItemList}>
        {todoList && // todoList가 있을 때만 출력
          todoList.map((todoItem) => {
            // map을 이용하여 TodoItem을 출력
            // checkedList 값에 따라 '할 일 목록' 또는 '완료한 목록'을 출력
            if (checkedList != todoItem.checked) return null;

            // 삭제한 항목인 경우, 출력하지 않음 (deleted가 true)
            if (todoItem.deleted) return null;

            return (
              <TodoItem
                key={todoItem.id}
                todoItem={todoItem}
                todoList={todoList}
                setTodoList={setTodoList}
              />
            );
          })}
      </ul>
    </section>
  );
};

TodoItemList.propTypes = {
  title: PropTypes.string.isRequired,
  todoList: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      text: PropTypes.string.isRequired,
    })
  ),
  setTodoList: PropTypes.func.isRequired,
  checkedList: PropTypes.bool.isRequired,
};

export default TodoItemList;
