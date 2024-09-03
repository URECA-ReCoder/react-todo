import { useState } from 'react';

/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';

function TodoInput({ addTodo }) {
  const [text, setText] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (text.trim()) {
      //공백 제거했을 때, 길이가 1이상일 경우에만 실행
      addTodo(text);
      setText(''); //초기화
    }
  };

  return (
    <form
      css={css({
        height: '10%',
        display: 'flex',
        boxAlign: 'center',
        alignItems: 'center',
        justifyContent: 'space-evenly',
      })}
      onSubmit={handleSubmit}
    >
      <input
        css={css({
          width: '70%',
          height: '20%',
          marginBottom: '3%',
          padding: '5%',
          borderRadius: '15px',
          border: 'solid 1px lightgrey',
        })}
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)} //state 추적
        placeholder="할일을 입력하세요"
      />
      <button
        css={css({
          width: '10%',
          height: '50%',
          background: 'none',
          borderRadius: '8px',
          border: '1px solid rgb(236, 236, 236)',
          cursor: 'pointer',
        })}
        type="submit"
      >
        ➕
      </button>
    </form>
  );
}

export default TodoInput;
