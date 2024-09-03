/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import { TodoItem } from './TodoItem';

function List({ list, setTodoList, listName }) {
  return (
    <div
      css={css({
        height: '220px',
        width: '100%',
        padding: '18px 18px 0 18px',
        borderBottom: listName == 'TO DO' ? 'solid 1px lightgray' : 'none',
      })}
    >
      <div css={css({ fontSize: '18px', marginBottom: '15px' })}>
        {listName} ({list.length})
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
        <TodoItem todoList={list} setTodoList={setTodoList} />
      </div>
    </div>
  );
}

export default List;
