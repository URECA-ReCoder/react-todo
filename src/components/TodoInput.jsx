//** @jsxImportSource @emotion/react */
import { useState } from 'react'; 
import { css } from '@emotion/react'; 

const inputContainerStyle = css`
  margin-bottom: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const inputStyle = css`
  padding: 10px;
  width: 200px;
  margin-right: 10px;
  border: none;
  border-radius: 5px;
  outline: none;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
`;

const buttonStyle = css`
  padding: 10px;
  cursor: pointer;
  background-color: #ff7f7f;
  border: none;
  border-radius: 5px;
  color: white;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);
`;

function TodoInput({ addTodo }) {
  const [input, setInput] = useState(''); // 입력 값을 관리하기 위한 상태 선언

  // 폼 제출 시 호출되는 함수
  const handleSubmit = (e) => {
    e.preventDefault(); // 기본 폼 제출 동작을 막음
    if (!input.trim()) return; // 입력 값이 공백일 경우 아무 작업도 하지 않음
    addTodo(input); 
    setInput('');
  };

  return (
    <form css={inputContainerStyle} onSubmit={handleSubmit}>
      <input
        css={inputStyle}
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)} // 입력 값이 변경될 때마다 상태 업데이트
        placeholder="할일을 입력하세요"
      />
      <button css={buttonStyle} type="submit">+</button> {/* 할 일을 추가하는 버튼 */}
    </form>
  );
}

export default TodoInput; 