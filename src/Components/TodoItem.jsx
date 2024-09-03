/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import { DeleteButton } from './DeleteButton';
import { updateFromLocalStorage } from '../utils/updateFromLocalStorage';
import { getLocalStorage } from '../utils/getLocalStorage';

export const TodoItem = ({ todoList, setTodoList }) =>
  todoList.map((todo, index) => (
    <div
      key={index}
      css={css({
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        height: '20px',
        width: '100%',
      })}
    >
      <div
        css={css({
          display: 'flex',
          flexDirection: 'row',
          textAlign: 'center',
          alignItems: 'center',
          width: '100%',
          justifyContent: 'space-between',
        })}
      >
        <div
          css={css({
            cursor: 'pointer',
            textDecoration: todo.done ? 'line-through' : 'none',
            color: todo.done ? '#D3D3D3' : '#000',
            textAlign: 'center',
          })}
          onClick={() => {
            updateFromLocalStorage(todo.id);
            setTodoList(getLocalStorage());
          }}
        >
          • {todo.todo}
        </div>
        <DeleteButton id={todo.id} setTodoList={setTodoList} />
      </div>
    </div>
  ));
