/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import TodoList from './Components/TodoList';
import DoneList from './Components/DoneList';
import Header from './Components/Header';

function App() {
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
        <Header />
        <TodoList />
        <DoneList />
      </div>
    </div>
  );
}

export default App;
