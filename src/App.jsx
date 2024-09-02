/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import 'normalize.css';
import { useState } from 'react';
import InputBox from './components/InputBox.jsx';
import ToDoItemList from './components/ToDoItemList.jsx';

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

  const [todoList, setTodoList] = useState([]); //todoItem을 담을 리스트

  return (
    <div className="body" css={bodyStyle}>
      <div className="container" css={containerStyle}>
        <h2 className="title" css={mainTitleStyle}>
          To Do List
        </h2>
        <InputBox todoList={todoList} setTodoList={setTodoList} />

        {/* 할 일 목록 */}
        <ToDoItemList
          title={'📂 TO DO (0)'}
          todoList={todoList}
          setTodoList={setTodoList}
          checkedList={false}
        />

        {/* 완료된 목록 */}
        <ToDoItemList
          title={'🗑️ DONE (0)'}
          todoList={todoList}
          setTodoList={setTodoList}
          checkedList={true}
        />
      </div>
    </div>
  );
}

export default App;
