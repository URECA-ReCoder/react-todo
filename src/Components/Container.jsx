/** @jsxImportSource @emotion/react */
import React from 'react';
import { css } from '@emotion/react';

function Container({ children }) {
  return (
    <div
      css={css({
        width: '400px',
        maxWidth: '60vw', // 모바일이나 작은 화면에서 잘리길래 화면 설정해주었다.
        height: 'auto',
        paddingTop: '5%',
        display: 'flex',
        flexDirection: 'column',
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        borderRadius: '10px',
        backgroundColor: 'rgba(255, 255, 255, 0.185)',
        backdropFilter: 'blur(px)',
        // WebkitBackdropFilter: 'blur(15px)', // 사파리 호환성을 위한 설정
        border: '2px solid rgba(255, 255, 255, 0.568)',
        padding: '20px',
        color: '#ffffff',
        boxShadow:
          '0 4px 10px rgba(114, 114, 114, 0.1), 0 4px 13px rgba(0, 0, 0, 0.15), inset 0px 0px 5px rgba(255, 255, 255, 0.514)',

        // 유리 두께감을 강조하는 추가적인 효과
        '&:before': {
          content: '""',
          position: 'absolute',
          top: '0',
          left: '0',
          right: '0',
          bottom: '0',
          borderRadius: 'inherit',
          background: 'inherit',
          filter: 'blur(10px)',
          zIndex: '-1',
        },

        '&:after': {
          content: '""',
          top: '0',
          left: '0',
          right: '0',
          bottom: '0',
          borderRadius: 'inherit',
          background: 'rgba(255, 255, 255, 0.05)',
          boxShadow: 'inset 0 0 5px rgba(255, 255, 255, 0.1)',
          zIndex: '0',
        },
      })}
    >
      <div
        css={{
          fontSize: '25px',
          fontWeight: '900',
          marginBottom: '20px',
          padding: '10px 0 20px 0',
          borderBottom: '2px solid white',
        }}
      >
        Todo-List
      </div>
      {children}
    </div>
  );
}

export default Container;
