/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import React from 'react';
import PropTypes from 'prop-types';

const todoItemContent = css`
  font-size: 16px;
  margin: 10px;
`;
const doneTodoItemContent = css`
  font-size: 16px;
  margin: 10px;
  color: lightgray;
  text-decoration: line-through;
`;
const todoItemDeleteButton = css`
  border: none;
  background: transparent;
`;
const todoItemLi = css`
  list-style-type: none;
`;

const TodoItem = ({ todoItem, todoList, setTodoList }) => {
  const onChangeCheckbox = () => {
    const nextTodoList = todoList.map((item) => ({
      ...item,

      // id 값이 같은 항목의 checked 값을 Toggle 함
      checked: item.id === todoItem.id ? !item.checked : item.checked,
    }));
    setTodoList(nextTodoList);
  };

  const onClickDeleteButton = () => {
    if (window.confirm('할 일을 삭제하시겠습니까?')) {
      const nextTodoList = todoList.map((item) => ({
        ...item,
        deleted: item.id === todoItem.id ? true : item.deleted,
      }));
      setTodoList(nextTodoList);
    }
  };
  return (
    <>
      <li className="todo-item-li" css={todoItemLi}>
        {/* 완료 표시를 위한 체크박스 */}
        <input
          className="todo-item-checkbox"
          type="checkbox"
          checked={todoItem.checked}
          onChange={onChangeCheckbox}
        />

        {/* todo item 내용 */}
        {!todoItem.checked ? ( // 완료한 일인 경우에는 밑줄 스타일 적용
          <span className="todo-item-content" css={todoItemContent}>
            {todoItem.text}
          </span>
        ) : (
          <span className="done-todo-item-content" css={doneTodoItemContent}>
            {todoItem.text}
          </span>
        )}

        {/* 수정 버튼
        {!todoItem.checked ? ( // 완료한 일인 경우에는 null을 반환하여 수정버튼이 보이지 않도록 함
          <button type="button" className="todo-item-edit-button">
            수정
          </button>
        ) : null} */}

        {/* 삭제 버튼 */}
        <button
          type="button"
          className="todo-item-delete-button"
          onClick={onClickDeleteButton}
          css={todoItemDeleteButton}
        >
          🗑️
        </button>
      </li>
      <br />
    </>
  );
};

TodoItem.propTypes = {
  todoItem: PropTypes.shape({
    id: PropTypes.number,
    text: PropTypes.string.isRequired,
  }),
  todoList: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      text: PropTypes.string.isRequired,
    })
  ),
  setTodoList: PropTypes.func.isRequired,
};

export default TodoItem;
