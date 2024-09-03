/** @jsxImportSource @emotion/react */
import React, { useState, useEffect } from 'react';
import Container from '../Components/Container';
import InputValue from '../Components/InputValue';
import List from '../Components/List';
import addIcon from '../images/pencil.png';
import selItem from '../images/checkbox.png';
import checkbox2 from '../images/checkbox2.png';
import Button from '../Components/Button';
import delItems from '../images/trash.png';
import { useTodoList } from '../hooks/useTodoList';
function TodoList() {
  const {
    inputValue,
    setInputValue,
    activeItems,
    completedItems,
    selectedItems,
    isSelectingTodoList,
    isSelectingDone,
    addItem,
    toggleSelectingTodoList,
    toggleSelectingDone,
    toggleSelectItem,
  } = useTodoList();

  return (
    <Container>
      <div
        css={{
          fontSize: '25px',
          fontWeight: '900',
          marginBottom: '20px',
          padding: '10px 0 20px 0',
          borderBottom: '2px solid white',
        }}
      >
        🧾Todo-List
      </div>
      <div
        css={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          marginBottom: '20px',
        }}
      >
        <InputValue
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
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

      {/* TodoList Section */}
      <span style={{ fontSize: '20px', fontWeight: '900' }}>
        TodoList{' '}
        <img
          src={isSelectingTodoList ? checkbox2 : selItem}
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
          onClick={
            isSelectingTodoList
              ? moveToCompletedForSelected
              : toggleSelectingTodoList
          }
        />
        {isSelectingTodoList && (
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
              onClick={() => deleteSelectedItems(false)}
            />
            <Button
              isActive={selectedItems.length === activeItems.length} // 조건부 스타일 적용
              onClick={() => selectAllItems(false)}
            >
              전체 선택
            </Button>
          </span>
        )}
      </span>
      <List
        items={activeItems}
        onItemClick={moveToCompleted} // 개별 항목 클릭 시 Done으로 이동
        onDelClick={(index) => deleteItem(index, false)}
        isCompleted={false}
        isSelecting={isSelectingTodoList}
        selectedItems={selectedItems}
        onSelectItem={(index) => toggleSelectItem(index, false)}
      />

      {/* Done Section */}
      <span style={{ fontSize: '20px', fontWeight: '900' }}>
        Done
        <img
          src={isSelectingDone ? checkbox2 : selItem}
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
          onClick={
            isSelectingDone ? moveToTodoListForSelected : toggleSelectingDone
          }
        />
        {isSelectingDone && (
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
              onClick={() => deleteSelectedItems(true)}
            />
            <Button
              isActive={selectedItems.length === completedItems.length} // 조건부 스타일 적용
              onClick={() => selectAllItems(true)}
            >
              전체 선택
            </Button>
          </span>
        )}
      </span>

      <List
        items={completedItems}
        onItemClick={moveToAlready}
        onDelClick={(index) => deleteItem(index, true)}
        isCompleted={true}
        isSelecting={isSelectingDone}
        selectedItems={selectedItems}
        onSelectItem={(index) => toggleSelectItem(index, true)}
      />
    </Container>
  );
}

export default TodoList;
