import InputForm from './components/InputForm.jsx';
import TodoList from './components/TodoList.jsx';
import Header from './components/Header.jsx';
import { Global, css } from '@emotion/react';
import styled from '@emotion/styled';
import { useEffect, useState } from 'react';
import bgImage from './grid.jpg';

const GlobalStyles = () => (
  <Global
    styles={css`
      @font-face {
        font-family: 'RixXladywatermelonR';
        src: url('https://fastly.jsdelivr.net/gh/projectnoonnu/2408-4@1.0/RixXladywatermelonR.woff2')
          format('woff2');
        font-weight: normal;
        font-style: normal;
      }

      html {
        margin: 0;
        display: flex;
        justify-content: center;
        align-items: center;
        height: 100vh;
      }

      body {
        font-family: 'RixXladywatermelonR', sans-serif;
        max-width: 500px;
        padding: 10px;
        text-align: center;
        display: flex;
        justify-content: center;
        align-items: center;
        scrollbar-width: thin;
        margin: 0;
      }

      button {
        font-family: 'RixXladywatermelonR';
        display: flex;
        justify-content: center;
        align-content: center;
        flex-wrap: wrap-reverse;
      }
    `}
  />
);

const Container = styled.div`
  position: relative;
  display: flex;
  width: 450px;
  height: 680px;
  flex-direction: column;
  background-color: #fef79fbd;
  overflow: hidden;
  ::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-image: url(${bgImage});
    background-size: cover;
    background-blend-mode: darken;
    opacity: 0.5;
    z-index: -1;
  }
`;

function App() {
  const userName = '옹헤';
  const [todoList, setTodoList] = useState(() => {
    const prevTodoList = localStorage.getItem('todoList');
    return prevTodoList ? JSON.parse(prevTodoList) : [];
  });

  //todoList가 변경될 때마다 localStorage에 저장
  useEffect(() => {
    localStorage.setItem('todoList', JSON.stringify(todoList));
  }, [todoList]);

  //사용자에게 받은 입력으로 todo 추가하기
  function handleAddTodo(todoInput) {
    if (todoInput === '') {
      alert('한 글자 이상 입력해주세요.');
      return;
    }

    const newTodo = {
      createTime: Date.now(),
      content: todoInput,
      isCompleted: false,
    };

    setTodoList([...todoList, newTodo]);
  }

  function handleComplete(todo) {
    const newTodoList = todoList.map((item) => {
      if (item.createTime === todo.createTime) {
        return { ...item, isCompleted: !item.isCompleted };
      }
      return item;
    });
    setTodoList(newTodoList);
  }

  function handleDelete(todo) {
    const newTodoList = todoList.filter((item) => {
      return item.createTime !== todo.createTime;
    });
    setTodoList(newTodoList);
  }

  return (
    <>
      <GlobalStyles />
      <Container>
        <Header name={userName} />
        <InputForm handleAddTodo={handleAddTodo} />
        <TodoList
          todoList={todoList}
          handleComplete={handleComplete}
          handleDelete={handleDelete}
        />
      </Container>
    </>
  );
}

export default App;
