import Todo from "./Todo";
import { Text } from "./UI";
import { Style } from "../styles/App.styles";

export default function TodoSection({
  title,
  items,
  onToggle,
  onDelete,
  isCompleted,
}) {
  return (
    <Style.TodoWrapper>
      <Text.MiniTitle>
        {title} ({items.length})
      </Text.MiniTitle>
      <Todo
        items={items}
        onToggle={onToggle}
        onDelete={onDelete}
        isCompleted={isCompleted}
      />
    </Style.TodoWrapper>
  );
}
