/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';

const buttonStyle = css`
  padding: 10px;
  cursor: pointer;
  background-color: #ff7f7f;
  border: none;
  border-radius: 5px;
  color: white;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);
  margin-left: 8px;
`;

function TodoButton({ onClick, children }) {
  return (
    <button css={buttonStyle} onClick={onClick}>
      {children} {/* 버튼 내부의 내용 (아이콘이나 텍스트) */}
    </button>
  );
}

export default TodoButton; 
