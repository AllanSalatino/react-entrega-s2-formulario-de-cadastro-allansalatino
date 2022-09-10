import styled from "styled-components";

export const Container = styled.div`
  position: fixed;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  width: 100%;
  height: 100vh;

  background-color: rgba(18, 18, 20, 0.5);

  animation: open 0.5s;
  @keyframes open {
    0%{
      height: 0vh;
    }
    100%{
      height: 100vh;
    }
  }
`;

export const Header = styled.header`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  width: 100%;
  height: 50px;

  margin-bottom: 15px;

  background-color: var(--mediumGrey);

  border-radius: 7px 7px 0px 0px;

  & > h1 {
    font-size: 14px;
    font-weight: 700;
    margin-left: 15px;
  }
  & > button {
    font-size: 16px;
    font-weight: 600;
    margin-right: 15px;
  }
`;

export const Main = styled.main`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;

  width: 100%;

  & > form {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;

    width: 100%;
    height: 220px;

    & > div {
      width: 100%;

      & > h3{
        margin-left: 15px;
        margin-bottom: 10px;
      }

      & > input{
        border: 2px solid var(--lightGrey);
      }

      & > select {
        background-color: var(--mediumGrey);
        border-radius: 5px;
        padding: 10px;
        color: var(--white);
        outline: none;
        border: 2px solid var(--lightGrey);
        width: 90%;
        margin: 0px 5% 10px 5%;
      }
    }

    & > button {
    width: 90%;
    height: 40px;
    border-radius: 7px;
    background-color: var(--pink);
    margin: 0px 5% 15px 5%;
    font-size: 14px;
    font-weight: 500;
    transition: 0.3s;
    :hover {
      background-color: #ff427f;
    }
  }
  }
`;

export const Label = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;

  width: 300px;
  height: 300px;

  background-color: var(--darkGrey);

  border-radius: 7px;
`;
