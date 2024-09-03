/** @jsxImportSource @emotion/react */
import React from 'react';
import Button from '../Components/Button';
import selItem from '../images/checkbox.png';
import checkbox2 from '../images/checkbox2.png';
import delItems from '../images/trash.png';
import List from '../Components/List';

function TodoSection({
  title,
  items,
  isSelecting,
  selectedItems,
  toggleSelecting,
  moveToOtherList,
  toggleSelectItem,
  deleteSelectedItems,
  selectAllItems,
  onItemClick,
  onDelClick,
  isCompleted,
}) {
  return (
    <>
      <span style={{ fontSize: '20px', fontWeight: '900' }}>
        {title}
        <img
          src={isSelecting ? checkbox2 : selItem}
          css={{
            margin: '10px 10px 0 0',
            width: '17px',
            height: '17px',
            cursor: 'pointer',
            float: 'right',
            transition: 'all 0.3s ease-in-out',
            '&:hover': {
              transform: 'scale(1.15)',
            },
          }}
          onClick={isSelecting ? moveToOtherList : toggleSelecting}
        />
        {isSelecting && (
          <span>
            <img
              src={delItems}
              css={{
                margin: '10px 10px 0 0',
                width: '20px',
                height: '20px',
                cursor: 'pointer',
                float: 'right',
                transition: 'all 0.3s ease-in-out',
                '&:hover': {
                  transform: 'scale(1.15)',
                },
              }}
              onClick={deleteSelectedItems}
            />
            <Button
              isActive={selectedItems.length === items.length}
              onClick={selectAllItems}
            >
              전체 선택
            </Button>
          </span>
        )}
      </span>
      <List
        items={items}
        onItemClick={onItemClick}
        onDelClick={onDelClick}
        isCompleted={isCompleted}
        isSelecting={isSelecting}
        selectedItems={selectedItems}
        onSelectItem={toggleSelectItem}
      />
    </>
  );
}

export default TodoSection;
