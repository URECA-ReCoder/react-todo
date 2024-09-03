/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import TodoTemplete from './components/TodoTemplete';

const appStyle = css`
  background: radial-gradient(#e3fafc, #99e9f2, #22b8cf);
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;

function App() {
  return (
    <div css={appStyle}>
      <TodoTemplete />
    </div>
  );
}

export default App;
