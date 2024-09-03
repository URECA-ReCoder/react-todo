/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import Header from './Components/Header';
import { useEffect, useState } from 'react';
import { getLocalStorage } from './utils/getLocalStorage';
import List from './Components/List';

function App() {
  const [todoList, setTodoList] = useState(getLocalStorage() || []);
  useEffect(() => {
    if (getLocalStorage() === null) {
      localStorage.setItem('todo', JSON.stringify([]));
    }
  }, []);
  const notDoneTodoList = todoList.filter((todo) => todo.done === false);
  const doneTodoList = todoList.filter((todo) => todo.done === true);
  return (
    <div
      css={css({
        width: '100vw',
        height: '100vh',
        color: 'black',
        backgroundColor: 'red',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      })}
    >
      <div
        css={css({
          width: '360px',
          height: '600px',
          backgroundColor: 'white',
          borderRadius: '20px',
          boxShadow: '0px 0px 25px rgba(0, 0, 0, 0.25)',
        })}
      >
        <Header setTodoList={setTodoList} />
        <List
          listName="📋 TO DO"
          list={notDoneTodoList}
          setTodoList={setTodoList}
        />
        <List
          listName="💿 DONE"
          list={doneTodoList}
          setTodoList={setTodoList}
        />
      </div>
    </div>
  );
}

export default App;
