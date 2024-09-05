import styled from "@emotion/styled";

export const Text = {
  Title: styled.div`
    font-weight: 550;
    font-size: 32px;
    display: inline-block;
    color: white;
  `,
  MiniTitle: styled.div`
    font-weight: 650;
    font-size: 18px;
    display: inline-block;
    /* color: #464979; */
    color: gray;
  `,
  TodoBody: styled.div`
    font-weight: 350;
    color: #cbcbcd;
    font-size: 16px;
    display: inline-block;
  `,
  DoneBody: styled.div`
    font-weight: 350;
    font-size: 16px;
    color: gray;
    display: inline-block;
    text-decoration-line: line-through;
  `,
};

export const Button = {
  CheckedBox: styled.div`
    width: 18px;
    height: 18px;
    background-image: url("/check.png");
    background-size: contain;
    border-radius: 20px;
    opacity: 0.5;
    filter: invert();
    cursor: pointer;
    margin-right: 14px;
  `,
  UnCheckedBox: styled.div`
    width: 20px;
    height: 20px;
    border: 2px solid lightgray;
    border-radius: 8px;
    cursor: pointer;
    margin-right: 14px;
  `,
  DeleteBtn: styled.div`
    width: 14px;
    height: 14px;
    background-image: url("/delete.png");
    background-size: contain;
    cursor: pointer;
    margin: 20px;
    opacity: 0.5;
    filter: invert();
  `,
};
