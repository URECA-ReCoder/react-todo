/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';

const titleStyle = css`
  font-size: 24px;
  text-align: center;
  margin-bottom: 20px;
`;

function TodoHeader() {
  return <h1 css={titleStyle}>📚 TodoList</h1>;
}

export default TodoHeader;
