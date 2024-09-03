import { useState, useEffect } from 'react';

export function useTodoList() {
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

  return {
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
  };
}
