import styled from '@emotion/styled';

const ListLiStyle = styled.li`
  display: flex;
  align-items: center;
  padding: 8px 30px;
  gap: 8px;
`;

const DoBtnStyle = styled.button`
  width: 25px;
  height: 25px;
  border-radius: 8px;
  background-color: transparent;
  font-size: 25px;
  border-color: #393939;
`;

const DoneBtnStyle = styled.button`
  width: 25px;
  height: 25px;
  border-radius: 8px;
  border: transparent;
  background-color: green;
  font-size: 20px;
  font-weight: 500;
  color: white;
`;

const DeleteBtnStyle = styled.button`
  border: transparent;
  background-color: transparent;
  font-size: 20px;
  font-weight: 500;
`;

const DoneSpanStyle = styled.span`
  text-decoration: line-through;
  color: #b3b3b3;
`;

export default function TodoItem({ todo, handleComplete, handleDelete }) {
  return (
    <ListLiStyle>
      {todo.isCompleted ? (
        <DoneBtnStyle onClick={() => handleComplete(todo)}>v</DoneBtnStyle>
      ) : (
        <DoBtnStyle onClick={() => handleComplete(todo)}></DoBtnStyle>
      )}
      {todo.isCompleted ? (
        <DoneSpanStyle>{todo.content}</DoneSpanStyle>
      ) : (
        <span>{todo.content}</span>
      )}
      <DeleteBtnStyle onClick={() => handleDelete(todo)}>x</DeleteBtnStyle>
    </ListLiStyle>
  );
}
