/** @jsxImportSource @emotion/react */
import React from 'react';
import { css } from '@emotion/react';

function InputValue({ value, onChange }) {
  return (
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
        width: '300px',
        backgroundColor: 'rgba(222, 222, 222, 0.151)',
        boxShadow: '2px 2px 5px 1px rgba(0, 0, 0, 0.11)',
        '&:focus': {
          outline: 'none',
          boxShadow: '2px 2px 8px 2px rgba(114, 114, 114, 0.2)',
          backgroundColor: 'rgba(255, 255, 255, 0.25)',
        },
      })}
    />
  );
}

export default InputValue;
