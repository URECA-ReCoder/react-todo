/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import 'normalize.css';
import { useRef, useState } from 'react';
import PropTypes from 'prop-types';

export default function InputBox({ todoList, setTodoList }) {
  const formStyle = css`
    display: flex;
    align-items: center;
  `;

  const inputStyle = css`
    width: 300px;
    height: 35px;
    outline: none;
    border-radius: 20px;
    border: 1.2px solid;
    border-color: rgb(247, 196, 218);
    padding-left: 12px;
    @font-face {
      font-family: 'LINESeedKR-Rg';
      src: url('https://fastly.jsdelivr.net/gh/projectnoonnu/noonfonts_11-01@1.0/LINESeedKR-Rg.woff2')
        format('woff2');
      font-weight: 400;
      font-style: normal;
    }
    font-family: 'LINESeedKR-Rg';
    font-size: 12px;
    color: #3d3d3d;
  `;

  const addButtonStyle = css`
    border: 0;
    background-color: white;
    font-size: 20px;
    color: rgb(59, 56, 56);
    margin-left: 8px;
    cursor: pointer;
    &:hover {
      color: rgb(247, 196, 218);
    }
  `;

  const [text, setText] = useState(''); // input에 입력한 값
  const inputRef = useRef(null);

  // form 제출 시 새로고침 방지
  const formClickEvent = (e) => {
    e.preventDefault();
  };

  // input 값 가져오기
  function onChangeInput(e) {
    setText(e.target.value);
    // e.target에 있는 <input.../>으로부터 value 값을 가져옴
  }

  // + 버튼 클릭(form 제출)
  function onClickButton() {
    // 공백 입력 방지
    if (text.trim() === '') return;

    // todoItemList에 값 추가
    const AddTodoList = todoList.concat({
      id: todoList.length,
      text,
      checked: false,
    });
    setTodoList(AddTodoList);

    setText(''); // input 값 초기화
    inputRef.current.focus(); // 버튼 누른 후에도 input box에 자동 포커싱
  }

  return (
    <div>
      <form onSubmit={formClickEvent} className="form" css={formStyle}>
        <input
          type="text"
          name="todoItem"
          value={text}
          ref={inputRef}
          className="input-box"
          placeholder="할일을 입력하세요"
          onChange={onChangeInput} // input 값이 변하면(이벤트 발생) 메소드 실행
          css={inputStyle}
          autoFocus
        />
        <button
          className="add-button"
          onClick={onClickButton}
          css={addButtonStyle}
        >
          +
        </button>
      </form>
    </div>
  );
}

// props 값 검증
InputBox.propTypes = {
  todoList: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      text: PropTypes.string.isRequired,
    }).isRequired
  ),
  setTodoList: PropTypes.func.isRequired,
};
