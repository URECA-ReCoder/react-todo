import styled from "@emotion/styled";

const HeaderStyle = styled.header`
  font-size: 40px;
  font-weight: bold;
  padding: 20px;
  background-color: #2b3681;
  color: white;
  box-shadow: 0 8px 10px -5px rgba(0, 0, 0, 0.5);
`;

export default function Header({ name }) {
  return <HeaderStyle>{name}'s React Todo</HeaderStyle>;
}