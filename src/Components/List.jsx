/** @jsxImportSource @emotion/react */
import React from 'react';
import { css } from '@emotion/react';
import delIcon from '../images/trash.png';

function List({
  items,
  onItemClick,
  onDelClick,
  isCompleted,
  isSelecting,
  selectedItems,
  onSelectItem,
}) {
  return (
    <div
      css={css({
        listStyleType: 'none',
        padding: 0,
        marginBottom: '10px',
        width: '100%',
      })}
    >
      <ul
        css={css({
          // listStyleType: 'none',
          height: '80px',
          minHeight: '13vh',
          maxHeight: '13vh',
          backgroundColor: 'rgba(255, 255, 255, 0.281)',
          padding: '10px 20px',
          borderRadius: '5px',
          color: '#5e3b3b',
          overflowY: 'auto',
          boxShadow: '2px 2px 5px 1px rgba(0, 0, 0, 0.11)',
          fontSize: '0.7rem',
          '&::-webkit-scrollbar': {
            width: '8px',
          },
          '&::-webkit-scrollbar-track': {
            background: '#f1f1f1',
            borderRadius: '10px',
          },
          '&::-webkit-scrollbar-thumb': {
            backgroundColor: '#ff9393',
            borderRadius: '10px',
          },
        })}
      >
        {items.map((item, index) => (
          <li
            key={index}
            css={css({
              cursor: onItemClick ? 'pointer' : 'default',
              display: 'flex',
              alignItems: 'center',
              ...(isCompleted && item.style),
              padding: '0.3em 0',
            })}
          >
            {isSelecting && (
              <input
                type="checkbox"
                checked={selectedItems.includes(index)}
                onChange={() => onSelectItem(index)}
              />
            )}
            <span
              onClick={() => onItemClick && onItemClick(index)}
              css={css({
                width: '480px',
              })}
            >
              {isCompleted ? item.text : item}
            </span>
            <img
              src={delIcon}
              css={css({
                float: 'right',
                width: '15px',
                height: '15px',
                marginLeft: '10px',
                cursor: 'pointer',
              })}
              onClick={() => onDelClick && onDelClick(index)}
            />
          </li>
        ))}
      </ul>
    </div>
  );
}

export default List;
