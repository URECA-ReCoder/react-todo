/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import 'normalize.css';
import PropTypes from 'prop-types';

export default function ToDoItem({ todoItem, todoList, setTodoList }) {
  const spanStyle = css`
    @font-face {
      font-family: 'LINESeedKR-Rg';
      src: url('https://fastly.jsdelivr.net/gh/projectnoonnu/noonfonts_11-01@1.0/LINESeedKR-Rg.woff2')
        format('woff2');
      font-weight: 400;
      font-style: normal;
    }
    font-family: 'LINESeedKR-Rg';
    font-size: 15px;
    color: rgb(59, 56, 56);
  `;

  const spanCheckedStyle = css`
    @font-face {
      font-family: 'LINESeedKR-Rg';
      src: url('https://fastly.jsdelivr.net/gh/projectnoonnu/noonfonts_11-01@1.0/LINESeedKR-Rg.woff2')
        format('woff2');
      font-weight: 400;
      font-style: normal;
    }
    font-family: 'LINESeedKR-Rg';
    font-size: 15px;
    color: gray;
    text-decoration: line-through;
  `;

  const liStyle = css`
    margin: 3px 0px 3px 0px;
  `;

  const checkBoxStyle = css`
    cursor: pointer;
    appearance: none;
    width: 12px;
    height: 12px;
    margin-right: 10px;
    border: 1px solid;
    border-radius: 10px;
    border-color: rgb(59, 56, 56);

    &:checked {
      border-color: transparent;
      background-size: 100% 100%;
      background-color: rgb(247, 196, 218);
    }
  `;

  const deleteButtonStyle = css`
    border: 0;
    background-color: white;
    font-size: 14px;
    color: rgb(59, 56, 56);
    margin-left: 3px;
    cursor: pointer;
    &:hover {
      color: rgb(247, 196, 218);
    }
  `;

  // checkbox를 클릭하면, todoItem의 checked 값이 토글됨
  function onChangeCheckbox() {
    const updatedTodoList = todoList.map((item) => ({
      ...item,
      checked: item.id === todoItem.id ? !item.checked : item.checked,
    }));

    setTodoList(updatedTodoList);
  }

  // 항목 삭제
  function onDelete(id) {
    // 주어진 id와 일치하지 않는 항목들만 남김(일치하면 필터링 -> 해당 항목 삭제)
    const updatedTodoList = todoList.filter((todoItem) => todoItem.id !== id);
    setTodoList(updatedTodoList);
  }

  return (
    <li className="li" css={liStyle}>
      <input
        type="checkbox"
        className="check-box"
        checked={todoItem.checked}
        onChange={onChangeCheckbox}
        css={checkBoxStyle}
      />
      <span
        className="span"
        // 완료 여부에 따라 스타일 변경
        css={todoItem.checked ? spanCheckedStyle : spanStyle}
      >
        {todoItem.text}
      </span>
      <button
        type="button"
        className="delete-button"
        onClick={() => onDelete(todoItem.id)}
        css={deleteButtonStyle}
      >
        ✖️
      </button>
    </li>
  );
}

ToDoItem.propTypes = {
  todoItem: PropTypes.shape({
    id: PropTypes.number,
    text: PropTypes.string.isRequired,
    checked: PropTypes.bool.isRequired,
  }),
  todoList: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      text: PropTypes.string.isRequired,
      checked: PropTypes.bool.isRequired,
    })
  ),
  setTodoList: PropTypes.func.isRequired,
};
