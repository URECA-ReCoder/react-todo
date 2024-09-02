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

function TodoList() {
  const [inputValue, setInputValue] = useState('');
  const [activeItems, setActiveItems] = useState([]);
  const [completedItems, setCompletedItems] = useState([]);
  const [selectedItems, setSelectedItems] = useState([]);
  const [isSelectingTodoList, setIsSelectingTodoList] = useState(false);
  const [isSelectingDone, setIsSelectingDone] = useState(false);

  // 초기 데이터 로드
  useEffect(() => {
    const savedActiveItems =
      JSON.parse(localStorage.getItem('activeItems')) || [];
    const savedCompletedItems =
      JSON.parse(localStorage.getItem('completedItems')) || [];
    setActiveItems(savedActiveItems);
    setCompletedItems(savedCompletedItems);
  }, []);

  // localStorage 업데이트 함수
  const updateLocalStorage = (activeItems, completedItems) => {
    localStorage.setItem('activeItems', JSON.stringify(activeItems));
    localStorage.setItem('completedItems', JSON.stringify(completedItems));
  };

  const addItem = () => {
    if (inputValue.trim()) {
      const newActiveItems = [...activeItems, inputValue];
      setActiveItems(newActiveItems);
      updateLocalStorage(newActiveItems, completedItems);
      setInputValue('');
    }
  };

  const toggleSelectingTodoList = () => {
    setIsSelectingTodoList(!isSelectingTodoList);
    setSelectedItems([]);
  };

  const toggleSelectingDone = () => {
    setIsSelectingDone(!isSelectingDone);
    setSelectedItems([]);
  };

  const toggleSelectItem = (index) => {
    if (selectedItems.includes(index)) {
      setSelectedItems(selectedItems.filter((i) => i !== index));
    } else {
      setSelectedItems([...selectedItems, index]);
    }
  };

  const selectAllItems = (isCompleted) => {
    const items = isCompleted ? completedItems : activeItems;
    if (selectedItems.length === items.length) {
      setSelectedItems([]);
    } else {
      setSelectedItems(items.map((_, index) => index));
    }
  };

  const deleteSelectedItems = (isCompleted) => {
    let newActiveItems = activeItems;
    let newCompletedItems = completedItems;

    if (isCompleted) {
      newCompletedItems = completedItems.filter(
        (_, index) => !selectedItems.includes(index)
      );
      setCompletedItems(newCompletedItems);
    } else {
      newActiveItems = activeItems.filter(
        (_, index) => !selectedItems.includes(index)
      );
      setActiveItems(newActiveItems);
    }

    updateLocalStorage(newActiveItems, newCompletedItems);
    setSelectedItems([]);
  };

  const moveToCompletedForSelected = () => {
    const itemsToMove = activeItems.filter((_, index) =>
      selectedItems.includes(index)
    );
    const styledItems = itemsToMove.map((item) => ({
      text: item,
      style: {
        textDecoration: 'line-through',
        color: '#888',
      },
    }));
    const newActiveItems = activeItems.filter(
      (_, index) => !selectedItems.includes(index)
    );
    const newCompletedItems = [...completedItems, ...styledItems];

    setCompletedItems(newCompletedItems);
    setActiveItems(newActiveItems);
    updateLocalStorage(newActiveItems, newCompletedItems);

    setSelectedItems([]);
    setIsSelectingTodoList(false);
  };

  const moveToTodoListForSelected = () => {
    const itemsToMove = completedItems.filter((_, index) =>
      selectedItems.includes(index)
    );
    const plainItems = itemsToMove.map((item) => item.text);
    const newCompletedItems = completedItems.filter(
      (_, index) => !selectedItems.includes(index)
    );
    const newActiveItems = [...activeItems, ...plainItems];

    setActiveItems(newActiveItems);
    setCompletedItems(newCompletedItems);
    updateLocalStorage(newActiveItems, newCompletedItems);

    setSelectedItems([]);
    setIsSelectingDone(false);
  };

  const moveToCompleted = (index) => {
    const itemToMove = activeItems[index];
    const styledItem = {
      text: itemToMove,
      style: {
        textDecoration: 'line-through',
        color: '#888',
      },
    };
    const newActiveItems = activeItems.filter((_, i) => i !== index);
    const newCompletedItems = [...completedItems, styledItem];

    setCompletedItems(newCompletedItems);
    setActiveItems(newActiveItems);
    updateLocalStorage(newActiveItems, newCompletedItems);
  };

  const moveToAlready = (index) => {
    const itemToMove = completedItems[index];
    const plainItem = itemToMove.text;
    const newCompletedItems = completedItems.filter((_, i) => i !== index);
    const newActiveItems = [...activeItems, plainItem];

    setActiveItems(newActiveItems);
    setCompletedItems(newCompletedItems);
    updateLocalStorage(newActiveItems, newCompletedItems);
  };

  const deleteItem = (index, isCompleted) => {
    let newActiveItems = activeItems;
    let newCompletedItems = completedItems;

    if (isCompleted) {
      newCompletedItems = completedItems.filter((_, i) => i !== index);
      setCompletedItems(newCompletedItems);
    } else {
      newActiveItems = activeItems.filter((_, i) => i !== index);
      setActiveItems(newActiveItems);
    }

    updateLocalStorage(newActiveItems, newCompletedItems);
  };

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
