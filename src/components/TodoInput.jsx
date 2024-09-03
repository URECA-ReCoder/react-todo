/** @jsxImportSource @emotion/react */
import React, { Component } from 'react';
import { useState, useRef, useEffect } from 'react';
import PropTypes from 'prop-types';
import { css } from '@emotion/react';
import { BsFillExclamationTriangleFill } from 'react-icons/bs';

// 할 일 입력 form
const inputContainer = css`
  padding: 0 20px;
`;
// 할 일 입력 버튼
const todoInputButton = css`
  border: none;
  background: none;
  cursor: pointer;
  padding: 10px;
`;
// 할 일 입력 창
const inputBox = css`
  width: 80%;
  padding: 10px;
  border: 1px solid lightgray;
  border-radius: 15px;
`;
// Todo List 앱 제목
const appTitle = css`
  padding: 20px 20px 0;
  font-style: italic;
`;

// 할 일 입력 기능
const TodoInput = ({ todoList, setTodoList }) => {
  const [text, setText] = useState('');
  const inputRef = useRef(null); // 버튼 클릭 후 input 값 초기화 후 focusing
  const [popup, setPopup] = useState(false); // 공백 입력 방지 팝업
  // input 값 가져오기
  const onChangeInput = (e) => {
    setText(e.target.value);
  };

  const onClickAddButton = (e) => {
    e.preventDefault();

    if (text.length === 0) {
      setPopup(true);
      return; // 공백일 경우 이후 코드를 실행하지 않음
    }
    // TodoItemList에 값 추가
    const nextTodoList = todoList.concat({
      id: todoList.length,
      text,
      checked: false, // 완료 유무 flag
      deleted: false, // 삭제 flag
    });
    setTodoList(nextTodoList);

    setText(''); // input 값 초기화

    // inputRef.current가 null이 아닌지 확인한 후 focus 호출
    if (inputRef.current) {
      inputRef.current.focus(); // input 창에 focusing
    }
  };

  useEffect(() => {
    // todoList가 변했을 때만 실행
    console.log(todoList);
  }, [todoList]);

  return (
    <div className="todo-input">
      <div className="app-title" css={appTitle}>
        <h1>Todo List</h1>
        <hr />
      </div>
      <form css={inputContainer}>
        {/* 할 일 입력창 */}
        <input
          type="text"
          name="todoItem"
          value={text}
          ref={inputRef}
          onChange={onChangeInput}
          placeholder="할 일을 입력해주세요."
          css={inputBox}
        />
        {/* 할 일 입력 버튼 */}
        <button type="submit" onClick={onClickAddButton} css={todoInputButton}>
          +
        </button>
      </form>

      {popup ? <Popup popup={popup} setPopup={setPopup} /> : null}
    </div>
  );
};

// 팝업창 디자인
function Popup(props) {
  return (
    <div
      className="error-message"
      onClick={() => {
        props.setPopup(!props.popup);
      }}
    >
      <p
        css={css`
          color: gray;
          font-size: 13px;
          padding: 0px;
          margin: 10px 25px 0;
        `}
      >
        <BsFillExclamationTriangleFill /> 공백은 입력할 수 없습니다.
      </p>
    </div>
  );
}

// props 값 검증
TodoInput.propTypes = {
  todoList: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      text: PropTypes.string.isRequired,
    }).isRequired
  ),
  setTodoList: PropTypes.func.isRequired,
};

export default TodoInput;
