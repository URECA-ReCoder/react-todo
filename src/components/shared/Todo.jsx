import TodoItem from "./TodoItem";
import { Style } from "../styles/Todo.styles";

export default function Todo({ items, onToggle, onDelete, isCompleted }) {
  return (
    <Style.Wrapper>
      {items.map((todo, index) => (
        <TodoItem
          key={index}
          todo={todo}
          isCompleted={isCompleted}
          onToggle={() => onToggle(index, isCompleted)}
          onDelete={() => onDelete(index)}
        />
      ))}
    </Style.Wrapper>
  );
}
