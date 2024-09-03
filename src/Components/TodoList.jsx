/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import { updateFromLocalStorage } from '../utils/updateFromLocalStorage';
import { getLocalStorage } from '../utils/getLocalStorage';

function TodoList({ notDoneTodoList, setTodoList }) {
  const doneTodo = (id) => {
    updateFromLocalStorage(id);
    setTodoList(getLocalStorage());
  };
  return (
    <div
      css={css({
        height: '235px',
        width: '324px',
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
        })}
      >
        {notDoneTodoList.map((todo, index) => (
          <div
            key={index}
            css={css({
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              height: '20px',
              width: '80%',
            })}
          >
            <div
              css={css({
                display: 'flex',
                flexDirection: 'row',
                textAlign: 'center',
                alignItems: 'center',
                width: '100%',
              })}
            >
              *<div onClick={() => doneTodo(todo.id)}>{todo.todo}</div>
              <div>❌</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default TodoList;
