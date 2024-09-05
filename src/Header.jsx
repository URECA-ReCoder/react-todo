import Input from "./components/shared/Input";
import { Text } from "./components/shared/UI";
import { Style } from "./components/styles/App.styles";

export default function Header({ handleFormSubmit }) {
  return (
    <Style.Header>
      <Style.TitleWrapper>
        <Style.GameIcon src="game2.png" alt="game" />
        <Text.Title>SCHEDULE</Text.Title>
      </Style.TitleWrapper>
      <Input addTodo={handleFormSubmit} />
    </Style.Header>
  );
}
