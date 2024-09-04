/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import 'normalize.css';
import ToDoItem from './ToDoItem';
import PropTypes from 'prop-types';

export default function ToDoItemList({
  title,
  todoList,
  setTodoList,
  checkedList,
}) {
  const listBoxStyle = css`
    overflow-y: auto;
    &::-webkit-scrollbar {
      // 스크롤바 모양 변경
      width: 4px;
    }
    &::-webkit-scrollbar-thumb {
      border-radius: 2px; // 스크롤바 모서리 둥글게
      background: rgb(255, 238, 245); // 스크롤바 색상 변경
    }
  `;

  const titleStyle = css`
    width: 100%;
    height: 30px;
    border-top: 1px solid;
    border-color: rgb(247, 196, 218);
    padding-top: 15px;
    margin-top: 20px;
    @font-face {
      font-family: 'LINESeedKR-Bd';
      src: url('https://fastly.jsdelivr.net/gh/projectnoonnu/noonfonts_11-01@1.0/LINESeedKR-Bd.woff2')
        format('woff2');
      font-weight: 700;
      font-style: normal;
    }
    font-family: 'LINESeedKR-Bd';
    font-size: 16px;
    color: rgb(59, 56, 56);
  `;

  const listStyle = css`
    width: 100%;
    height: 180px;
  `;

  const ulStyle = css`
    list-style: none;
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding-left: 10px;
    margin: 0;
  `;

  return (
    <>
      <div className="todo-title" css={titleStyle}>
        <span>{title}</span>
      </div>
      <section className="todo-list-box" css={listBoxStyle}>
        <div className="todo-list" css={listStyle}>
          <ul className="ul" css={ulStyle}>
            {/* todoList에 값이 있을 경우에만 실행 */}
            {todoList &&
              todoList.map((todoItem) => {
                // checkedList 값에 따라 'TO DO 목록' 또는 'DONE 목록' 출력
                if (checkedList !== todoItem.checked) return null;
                return (
                  // 각각의 todoItem 출력
                  <ToDoItem
                    key={todoItem.id}
                    todoItem={todoItem}
                    todoList={todoList}
                    setTodoList={setTodoList}
                  />
                );
              })}
          </ul>
        </div>
      </section>
    </>
  );
}

ToDoItemList.propTypes = {
  title: PropTypes.string.isRequired,
  todoList: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      text: PropTypes.string.isRequired,
      checked: PropTypes.bool.isRequired,
    })
  ),
  setTodoList: PropTypes.func.isRequired,
  checkedList: PropTypes.bool.isRequired,
};
