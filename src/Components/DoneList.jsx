/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import { updateFromLocalStorage } from '../utils/updateFromLocalStorage';
import { getLocalStorage } from '../utils/getLocalStorage';

function DoneList({ doneTodoList, setTodoList }) {
  const goNotDone = (id) => {
    updateFromLocalStorage(id);
    setTodoList(getLocalStorage());
  };
  return (
    <div
      css={css({
        height: '235px',
        width: '100%',
        borderBottom: 'solid 1px lightgray',
        padding: '18px 18px 0 18px',
      })}
    >
      <div css={css({ fontSize: '18px' })}>🗑️ DONE ({doneTodoList.length})</div>
      <div css={css({ width: '100%', height: '156px', overflowY: 'scroll' })}>
        {doneTodoList.map((todo, index) => (
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
              *
              <div
                css={css({ textDecoration: 'line-through' })}
                onClick={() => goNotDone(todo.id)}
              >
                {todo.todo}
              </div>
              <div>❌</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default DoneList;
