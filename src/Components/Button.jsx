/** @jsxImportSource @emotion/react */
import React from 'react';
import { css } from '@emotion/react';

function Button({ onClick, children, isActive }) {
  return (
    <button
      css={css({
        background: isActive ? '#ff9393' : 'none', // isActive가 true일 때는 초록색, 그렇지 않으면 원래 색상
        border: isActive ? 'none' : '1.5px solid #ffffff',
        padding: '3px 5px',
        color: isActive ? 'white' : '#ff9393',
        fontSize: '11px',
        borderRadius: '3px',
        cursor: 'pointer',
        transition: 'background-color 0.3s, transform 0.3s',
        marginRight: '10px',
        marginTop: '7px',
        fontWeight: '700',
        float: 'right',
        transform: isActive ? 'scale(1.1)' : 'scale(1)', // isActive가 true일 때 버튼을 약간 확대

        '&:hover': {
          opacity: '.7',
        },

        '&:active': {
          boxShadow:
            '4px 4px 6px 0 rgba(255,255,255,.3),-4px -4px 6px 0 rgba(116, 125, 136, .2), inset -4px -4px 6px 0 rgba(255,255,255,.2),inset 4px 4px 6px 0 rgba(0, 0, 0, .2)',
        },
      })}
      onClick={onClick}
    >
      {children}
    </button>
  );
}

export default Button;
