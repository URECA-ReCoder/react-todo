/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import 'normalize.css';

function App() {
  const bodyStyle = css`
    margin: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    background-image: linear-gradient(
      to bottom right,
      rgb(247, 196, 218),
      rgb(239, 239, 239)
    );
  `;

  const containerStyle = css`
    width: 350px;
    height: 600px;
    background-color: white;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
    border-radius: 20px;
    padding: 20px;
  `;

  const mainTitleStyle = css`
    @font-face {
      font-family: 'LINESeedKR-Bd';
      src: url('https://fastly.jsdelivr.net/gh/projectnoonnu/noonfonts_11-01@1.0/LINESeedKR-Bd.woff2')
        format('woff2');
      font-weight: 700;
      font-style: normal;
    }
    font-family: 'LINESeedKR-Bd';
    color: rgb(59, 56, 56);
  `;

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

  const listStyle = css`
    width: 100%;
    height: 200px;
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

  return (
    <div className="body" css={bodyStyle}>
      <div className="container" css={containerStyle}>
        <h2 className="title" css={mainTitleStyle}>
          To Do List
        </h2>
        <form className="form" css={formStyle}>
          <input
            type="text"
            className="input-box"
            placeholder="할일을 입력하세요"
            css={inputStyle}
          />
          <button className="add-button" css={addButtonStyle}>
            +
          </button>
        </form>
        <section className="todo-list-box">
          <div className="todo-title" css={titleStyle}>
            <span>📂 TO DO (0)</span>
          </div>
          <div className="todo-list" css={listStyle}></div>
        </section>
        <section className="done-list-box">
          <div className="done-title" css={titleStyle}>
            <span>🗑️ DONE (0)</span>
          </div>
          <div className="done-list" css={listStyle}></div>
        </section>
      </div>
    </div>
  );
}

export default App;
