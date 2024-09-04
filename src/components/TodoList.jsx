import styled from '@emotion/styled';
import TodoItem from './TodoItem';

const Section = styled.section`
  margin-top: 20px;
`;

const SectionTitle = styled.h4`
  font-size: 20px;
  text-align: left;
  padding: 10px 20px;
  margin: 0;
`;

const ListUl = styled.ul`
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
      <Section>
        <SectionTitle>📋 Todo ({doList.length})</SectionTitle>
        <ListUl>
          {doList.map((todo) => 
            <TodoItem
              key={todo.createTime}
              todo={todo}
              handleComplete={handleComplete}
              handleDelete={handleDelete}
            />
          )}
        </ListUl>
      </Section>
      <Section>
        <SectionTitle>👍🏻 Done ({doneList.length})</SectionTitle>
        <ListUl>
          {doneList.map((todo) => 
            <TodoItem
              key={todo.createTime}
              todo={todo}
              handleComplete={handleComplete}
              handleDelete={handleDelete}
            />
          )}
        </ListUl>
      </Section>
    </>
  );
}
