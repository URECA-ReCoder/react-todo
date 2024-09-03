/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';

const itemStyle = css`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px 0;
  border-bottom: 1px solid rgba(255, 255, 255, 0.5);
  cursor: pointer;
  color: #fff;
`;

const completedStyle = css`
  text-decoration: line-through;
  color: #aaa;
`;

const buttonStyle = css`
  background: none;
  border: none;
  color: #fff;
  cursor: pointer;
`;

function TodoItem({ todo, index, deleteTodo, toggleTodo }) {
  return (
     // 할 일이 완료되었는지 여부에 따라 itemStyle 또는 completedStyle을 적용
     //할 일 텍스트, 클릭 시 완료 상태를 토글
     //삭제 버튼, 클릭 시 할 일 삭제 
     <div css={[itemStyle, todo.completed ? completedStyle : null]}>
     <span onClick={() => toggleTodo(index)}>{todo.text}</span>
     <button css={buttonStyle} onClick={() => deleteTodo(index)}>🗑️</button>
   </div>
  );
}

export default TodoItem;
