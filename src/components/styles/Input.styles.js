import styled from "@emotion/styled";

export const Style = {
  InputWrapper: styled.div`
    width: 100%;
    height: 80px;
    display: flex;
    justify-content: space-between;
    align-items: center;
  `,
  Input: styled.input`
    width: 100%;
    height: 40px;
    padding: 0 0 0 15px;
    border: none;
    border-radius: 5px 0px 0px 5px;
    outline: none;
  `,
  Button: styled.button`
    width: 40px;
    height: 40px;
    border-radius: 0px 5px 5px 0px;
    border: none;
    background-color: white;
    color: white;
    font-size: large;
    cursor: pointer;
    margin-right: 15px;
    color: black;
  `,
};
