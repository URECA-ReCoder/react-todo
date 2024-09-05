import { Text, Button } from "./UI";
import { Style } from "../styles/Todo.styles";

export default function TodoItem({ todo, isCompleted, onToggle, onDelete }) {
  return (
    <Style.ItemWrapper>
      {isCompleted ? (
        <>
          <Button.CheckedBox isChecked={isCompleted} onClick={onToggle} />
          <Text.DoneBody>{todo}</Text.DoneBody>
        </>
      ) : (
        <>
          <Button.UnCheckedBox isChecked={isCompleted} onClick={onToggle} />
          <Text.TodoBody>{todo}</Text.TodoBody>
        </>
      )}

      <Button.DeleteBtn onClick={onDelete} />
    </Style.ItemWrapper>
  );
}
