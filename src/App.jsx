import { useState, useEffect } from 'react';
import TodoInput from './components/TodoInput';
import TodoList from './components/TodoList';

// 아래 @jsxImportSource 이걸 안해주면 css props를 못 받아온다.
/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';

function App() {
  // 로컬 스토리지에서 저장된 할 일 목록 불러오기
  const [todos, setTodos] = useState(() => {
    const savedTodos = localStorage.getItem('todos');
    return savedTodos ? JSON.parse(savedTodos) : [];
  });

  // 할 일 목록이 변경될 때마다 로컬 스토리지에 저장
  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos]);

  const addTodo = (text) => {
    const newTodo = { id: Date.now(), text, completed: false }; // id에 고유한 숫자를 부여하기 위해서 Date.now() 사용
    setTodos([...todos, newTodo]);
  };

  const toggleTodo = (id) => {
    const updatedTodos = todos.map((todo) =>
      todo.id === id ? { ...todo, completed: !todo.completed } : todo
    );
    setTodos(updatedTodos);
  };

  const deleteTodo = (id) => {
    const filteredTodos = todos.filter((todo) => todo.id !== id);
    setTodos(filteredTodos);
  };

  const activeTodos = todos.filter((todo) => !todo.completed);
  const completedTodos = todos.filter((todo) => todo.completed);

  return (
    <div
      css={css({
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        width: '100vw',
        height: '100vh',
        margin: 0,
        background: 'linear-gradient(to right, #ffb3b3, #ffd9b3, #ffffb3)',
        fontFamily: 'Arial',
      })}
    >
      <div
        css={css({
          width: '360px',
          height: '600px',
          display: 'flex',
          flexDirection: 'column',
          borderRadius: '20px',
          backgroundColor: 'none',
          boxShadow: '0 0 25px rgba(0, 0, 0, 0.25)',
          border: '1px solid rgb(236, 236, 236)',
        })}
      >
        <header
          css={css({
            margin: '5% 5% 3% 5%',
            fontSize: '24px',
            fontWeight: '500',
            display: 'block',
            color: 'rgb(61, 61, 61)',
          })}
        >
          📚 투두리스트
        </header>

        <TodoInput addTodo={addTodo} />
        <h3
          css={css({
            height: '7.5%',
            paddingLeft: '16px',
            display: 'flex',
            boxAlign: 'center',
            alignItems: 'center',
            fontSize: '20px',
            borderTop: '1px solid rgb(236, 236, 236)',
            borderBottom: '1px solid rgb(236, 236, 236)',
            color: 'rgb(61, 61, 61)',
          })}
        >
          {activeTodos.length}개의 할일이 남아있어요
        </h3>
        <TodoList
          todos={activeTodos}
          toggleTodo={toggleTodo}
          deleteTodo={deleteTodo}
        />
        <h3
          css={css({
            height: '7.5%',
            paddingLeft: '16px',
            display: 'flex',
            boxAlign: 'center',
            alignItems: 'center',
            fontSize: '20px',
            borderTop: '1px solid rgb(236, 236, 236)',
            borderBottom: '1px solid rgb(236, 236, 236)',
            color: 'rgb(61, 61, 61)',
          })}
        >
          {completedTodos.length}개의 할일을 완료했어요
        </h3>
        <TodoList
          todos={completedTodos}
          toggleTodo={toggleTodo}
          deleteTodo={deleteTodo}
        />
      </div>
    </div>
  );
}

export default App;
