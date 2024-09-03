/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';

function TodoList() {
  return (
    <div
      css={css({
        height: '235px',
        width: '100%',
        borderBottom: 'solid 1px lightgray',
        padding: '18px 18px 0 18px',
      })}
    >
      <div css={css({ fontSize: '18px' })}>📋 To Do (n)</div>
      <div
        css={css({ width: '100%', height: '156px', overflowY: 'scroll' })}
      ></div>
    </div>
  );
}

export default TodoList;
