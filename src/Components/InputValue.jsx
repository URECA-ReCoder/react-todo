/** @jsxImportSource @emotion/react */
import React from 'react';
import { css } from '@emotion/react';
import addIcon from '../images/pencil.png';

function InputValue({ value, onChange, addItem }) {
  return (
    <div
      css={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: '20px',
      }}
    >
      <input
        type="text"
        value={value}
        onChange={onChange}
        css={css({
          padding: '10px',
          fontSize: '14px',
          borderRadius: '5px',
          // border: '1px solid #ccc',
          border: 'none',
          width: '80%',
          backgroundColor: 'rgba(222, 222, 222, 0.151)',
          boxShadow: '2px 2px 5px 1px rgba(0, 0, 0, 0.11)',
          '&:focus': {
            outline: 'none',
            boxShadow: '2px 2px 8px 2px rgba(114, 114, 114, 0.2)',
            backgroundColor: 'rgba(255, 255, 255, 0.25)',
          },
        })}
      />
      <img
        src={addIcon}
        css={{
          marginLeft: '10px',
          width: '20px',
          height: '20px',
          cursor: 'pointer',
          '&:hover': {
            transform: 'scale(1.15)',
          },
        }}
        onClick={addItem}
      />
    </div>
  );
}

export default InputValue;
