/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import React from 'react';

const todoItem = css`
  font-size: 16px;
  margin: 10px;
`;

const TodoItem = () => {
  return (
    <>
      <li className="todo-item-li">
        {/* 완료 표시를 위한 체크박스 */}
        <input type={'checkbox'} />

        {/* todo item 내용 */}
        <span className="todo-item-content" css={todoItem}>
          밥먹기
        </span>

        {/* 수정 버튼 */}
        <button className="todo-item-edit-button">수정</button>

        {/* 삭제 버튼 */}
        <button className="todo-item-delete-button">🗑️</button>
      </li>
      <br />
    </>
  );
};

export default TodoItem;
