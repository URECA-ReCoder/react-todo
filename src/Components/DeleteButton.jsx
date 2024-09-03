/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import { deleteFromLocalStorage } from '../utils/deleteFromLocalStorage';
import { getLocalStorage } from '../utils/getLocalStorage';

export const DeleteButton = ({ id, setTodoList }) => {
  return (
    <div
      css={css({ cursor: 'pointer' })}
      onClick={() => {
        deleteFromLocalStorage(id);
        setTodoList(getLocalStorage());
      }}
    >
      🗑️
    </div>
  );
};
