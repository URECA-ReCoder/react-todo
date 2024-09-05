import useInput from "../hooks/useInput";
import { Style } from "../styles/Input.styles";

export default function Input({ addTodo }) {
  const [inputValue, handleChange, setInputValue] = useInput("");

  const handleFormSubmit = (event) => {
    event.preventDefault();
    if (inputValue.trim() !== "") {
      addTodo(inputValue);
      setInputValue("");
    } else {
      alert("입력된 할 일이 없어요, 다시 확인해주세요!");
    }
  };

  return (
    <form onSubmit={handleFormSubmit}>
      <Style.InputWrapper>
        <Style.Input
          type="text"
          value={inputValue}
          onChange={handleChange}
          placeholder="할 일을 입력해주세요."
        />
        <Style.Button type="submit">+</Style.Button>
      </Style.InputWrapper>
    </form>
  );
}
