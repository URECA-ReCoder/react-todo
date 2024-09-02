import { useState } from 'react';

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
    <form className="todo-input" onSubmit={handleSubmit}>
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)} //state 추적
        placeholder="할일을 입력하세요"
      />
      <button type="submit">+</button>
    </form>
  );
}

export default TodoInput;
