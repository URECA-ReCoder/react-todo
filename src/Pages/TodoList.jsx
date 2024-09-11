/** @jsxImportSource @emotion/react */
import React from 'react';
import Container from '../Components/Container';
import InputValue from '../Components/InputValue';
import TodoSection from '../Components/TodoSection';
import addIcon from '../images/pencil.png';
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
    deleteSelectedItems,
    selectAllItems,
    moveToCompletedForSelected,
    moveToTodoListForSelected,
    moveToCompleted,
    moveToAlready,
    deleteItem,
  } = useTodoList();

  return (
    <Container>
      <InputValue
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        addItem={addItem}
      />

      {/* TodoList Section */}
      <TodoSection
        title="📜TodoList"
        items={activeItems}
        isSelecting={isSelectingTodoList}
        selectedItems={selectedItems}
        toggleSelecting={toggleSelectingTodoList}
        moveToOtherList={moveToCompletedForSelected}
        toggleSelectItem={(index) => toggleSelectItem(index, false)}
        deleteSelectedItems={() => deleteSelectedItems(false)}
        selectAllItems={() => selectAllItems(false)}
        onItemClick={moveToCompleted}
        onDelClick={(index) => deleteItem(index, false)}
        isCompleted={false}
      />

      {/* Done Section */}
      <TodoSection
        title="🚩Done"
        items={completedItems}
        isSelecting={isSelectingDone}
        selectedItems={selectedItems}
        toggleSelecting={toggleSelectingDone}
        moveToOtherList={moveToTodoListForSelected}
        toggleSelectItem={(index) => toggleSelectItem(index, true)}
        deleteSelectedItems={() => deleteSelectedItems(true)}
        selectAllItems={() => selectAllItems(true)}
        onItemClick={moveToAlready}
        onDelClick={(index) => deleteItem(index, true)}
        isCompleted={true}
      />
    </Container>
  );
}

export default TodoList;
