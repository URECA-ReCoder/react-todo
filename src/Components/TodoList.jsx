/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import { TodoItem } from './TodoItem';

function TodoList({ notDoneTodoList, setTodoList }) {
  return (
    <div
      css={css({
        height: '220px',
        width: '100%',
        borderBottom: 'solid 1px lightgray',
        padding: '18px 18px 0 18px',
      })}
    >
      <div css={css({ fontSize: '18px', marginBottom: '15px' })}>
        📋 To Do ({notDoneTodoList.length})
      </div>
      <div
        css={css({
          width: '100%',
          height: '156px',
          overflowY: 'scroll',
          display: 'flex',
          flexDirection: 'column',
          gap: '10px',
          paddingRight: '20px',
        })}
      >
        <TodoItem todoList={notDoneTodoList} setTodoList={setTodoList} />
      </div>
    </div>
  );
}

export default TodoList;
