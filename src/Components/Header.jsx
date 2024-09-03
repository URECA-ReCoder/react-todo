/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import { useEffect, useRef } from 'react';

function Header() {

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
          css={css({
            width: '288px',
            height: '48px',
            borderRadius: '15px',
            border: 'solid 1px lightgray',
          })}
        />
        <div>➕</div>
      </div>
    </div>
  );
}

export default Header;
