import styled from "@emotion/styled";

export const Style = {
  AppWrapper: styled.div`
    width: 620px;
    height: 440px;
    border-radius: 16px;
    box-shadow: 0 0 25px rgba(0, 0, 0, 0.5);
    background-color: black;
    padding: 40px 30px 30px 50px;
    margin-bottom: 60px;
  `,
  Header: styled.header`
    width: 100%;
    height: 100px;
    margin-bottom: 40px;
  `,
  TitleWrapper: styled.div`
    display: flex;
    align-items: center;
  `,
  GameIcon: styled.img`
    width: 35px;
    margin-right: 10px;
  `,
  TodoSectionWrapper: styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
  `,
  TodoWrapper: styled.section`
    width: 100%;
    display: flex;
    flex-direction: column;
    padding-left: 10px;
    margin-bottom: 20px;
  `,
};
