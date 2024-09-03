/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import { useEffect, useRef } from 'react';
import { setLocalStorage } from '../utils/setLocalStorage';
import { getLocalStorage } from '../utils/getLocalStorage';

function Header({ setTodoList }) {
  const inputRef = useRef(null);

  const addTodo = () => {
    const input = inputRef.current;
    if (input.value === '') {
      return;
    }
    setLocalStorage(input.value);
    input.value = '';
    inputRef.current.focus();
    setTodoList(getLocalStorage());
  };

  useEffect(() => {
    inputRef.current.focus();
  }, []);

  return (
    <div>
      <div css={css({ fontSize: '24px', margin: '18px 18px 0 18px' })}>
        📚 투두리스트
      </div>
      <div
        css={css({
          width: '100%',
          height: '81px',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          gap: '10px',
          borderBottom: 'solid 1px lightgray',
        })}
      >
        <input
          type="text"
          ref={inputRef}
          onKeyDown={(e) => {
            e.key === 'Enter' && addTodo();
          }}
          css={css({
            width: '288px',
            height: '48px',
            borderRadius: '15px',
            border: 'solid 1px lightgray',
            paddingLeft: '15px',
            '&:focus': {
              outline: 'none',
            },
          })}
          placeholder="할 일을 입력하세요"
        />
        <div onClick={addTodo}>➕</div>
      </div>
    </div>
  );
}

export default Header;
