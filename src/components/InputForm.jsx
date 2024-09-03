import styled from '@emotion/styled';
import { useState } from 'react';

const InputFormStyle = styled.form`
    display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 20px;
`;

const InputLabelStyle = styled.label`
  align-items: center;
  padding: 2px 7px;
  font-size: 20px;
`;

const InputStyle = styled.input`
  border-color: black;
  border-width: 0 0 2px;
  background-color: transparent;
  width: 180px;
  margin: 0;
  font-family: RixXladywatermelonR;
  padding-bottom: 5px;
  color: rgb(50, 50, 50);
  :focus {
    outline: none;
    box-shadow: none;
  }
`;

const InputBtnStyle = styled.button`
  border: transparent;
    border-radius: 4px;
    background-color: transparent;
    padding: 2px 7px;
    font-size: 25px;
    font-weight: 500;
  :hover {
    color: green;
    background-color: transparent;
  }
`;

export default function InputForm({ handleAddTodo }) {
  const [todoInput, setTodoInput] = useState('');

  const handleInputChange = (e) => {
    setTodoInput(e.target.value);
  };

  const handleInputSubmit = (e) => {
    e.preventDefault();
    handleAddTodo(todoInput);
    setTodoInput(''); // input 초기화
  };

  return (
    <>
      <InputFormStyle onSubmit={handleInputSubmit}>
        <InputLabelStyle htmlFor="todo-input">할 일 : </InputLabelStyle>
        <InputStyle id="todo-input" placeholder="할 일을 입력하세요" value={todoInput} onChange={handleInputChange}/>
        <InputBtnStyle id="input-btn" type="submit">
          +
        </InputBtnStyle>
      </InputFormStyle>
    </>
  );
}
