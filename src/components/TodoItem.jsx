import styled from '@emotion/styled';

const ListLiStyle = styled.li`
  display: flex;
  align-items: center;
  padding: 8px 30px;
  gap: 8px;
`;

const DoListCheckBtn = styled.button`
  width: 25px;
  height: 25px;
  border-radius: 8px;
  background-color: transparent;
  font-size: 25px;
  border-color: #393939;
`;

const DoneListCheckBtn = styled.button`
  width: 25px;
  height: 25px;
  border-radius: 8px;
  border: transparent;
  background-color: green;
  font-size: 20px;
  font-weight: 500;
  color: white;
`;

const DeleteBtn = styled.button`
  border: transparent;
  background-color: transparent;
  font-size: 20px;
  font-weight: 500;
`;

const DoneSpan = styled.span`
  text-decoration: line-through;
  color: #b3b3b3;
`;

export default function TodoItem({ todo, handleComplete, handleDelete }) {
  return (
    <ListLiStyle>
      {todo.isCompleted ? (
        <DoneListCheckBtn onClick={() => handleComplete(todo)}>v</DoneListCheckBtn>
      ) : (
        <DoListCheckBtn onClick={() => handleComplete(todo)}></DoListCheckBtn>
      )}
      {todo.isCompleted ? (
        <DoneSpan>{todo.content}</DoneSpan>
      ) : (
        <span>{todo.content}</span>
      )}
      <DeleteBtn onClick={() => handleDelete(todo)}>x</DeleteBtn>
    </ListLiStyle>
  );
}
