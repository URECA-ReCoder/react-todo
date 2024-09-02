function TodoItem({ todo, toggleTodo, deleteTodo }) {
  return (
    <li className="todo-item">
      <span
        style={{
          textDecoration: todo.completed ? 'line-through' : 'none',
          cursor: 'pointer',
        }}
        onClick={() => toggleTodo(todo.id)}
      >
        {todo.text}
      </span>
      <button className="delete-button" onClick={() => deleteTodo(todo.id)}>
        🗑️
      </button>
    </li>
  );
}

export default TodoItem;
