import styled from '@emotion/styled';
import TodoItem from './TodoItem';

const SectionStyle = styled.section`
  margin-top: 20px;
`;

const SectionTitleStyle = styled.h4`
  font-size: 20px;
  text-align: left;
  padding: 10px 20px;
  margin: 0;
`;

const ListUlStyle = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  height: 168px;
  overflow-y: scroll;
`;

export default function TodoList({ todoList, handleComplete, handleDelete }) {
  const doList = todoList.filter((todo) => !todo.isCompleted); 
  const doneList = todoList.filter((todo) => todo.isCompleted);

  return (
    <>
      <SectionStyle>
        <SectionTitleStyle>📋 Todo ({doList.length})</SectionTitleStyle>
        <ListUlStyle>
          {doList.map((todo) => 
            <TodoItem
              key={todo.createTime}
              todo={todo}
              handleComplete={handleComplete}
              handleDelete={handleDelete}
            />
          )}
        </ListUlStyle>
      </SectionStyle>
      <SectionStyle>
        <SectionTitleStyle>👍🏻 Done ({doneList.length})</SectionTitleStyle>
        <ListUlStyle>
          {doneList.map((todo) => 
            <TodoItem
              key={todo.createTime}
              todo={todo}
              handleComplete={handleComplete}
              handleDelete={handleDelete}
            />
          )}
        </ListUlStyle>
      </SectionStyle>
    </>
  );
}
