/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import TodoButton from './TodoButton';

// Todo 항목의 기본 스타일 정의
const itemStyle = css`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px 0;
  border-bottom: 1px solid rgba(255, 255, 255, 0.5);
  cursor: pointer;
  color: #fff;
`;

// 완료된 Todo 항목 스타일 정의
const completedStyle = css`
  text-decoration: line-through; // 완료된 항목을 취소선으로 표시
  color: #aaa;
`;

// 개별 Todo 항목을 나타내는 컴포넌트
function TodoItem({ todo, index, deleteTodo, toggleTodo }) {
  return (
    <div css={[itemStyle, todo.completed ? completedStyle : null]}>
      {/* 할 일 텍스트 표시 */}
      <span>{todo.text}</span>
      <div>
        {/* 할 일 완료 상태를 토글하는 버튼 */}
        <TodoButton onClick={() => toggleTodo(index)}>✔️</TodoButton>
        {/* 할 일을 삭제하는 버튼 */}
        <TodoButton onClick={() => deleteTodo(index)}>🗑️</TodoButton>
      </div>
    </div>
  );
}

export default TodoItem; 