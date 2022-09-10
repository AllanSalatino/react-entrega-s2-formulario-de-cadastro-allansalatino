import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  width: 100%;
  height: 100vh;
`;

export const Header = styled.header`
    display: flex;
    justify-content: center;
    align-items: center;

    width: 100%;

    margin-bottom: 25px;
`

export const Main = styled.main`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;

  width: 300px;
  height: 400px;

  background-color: var(--darkGrey);
  border-radius: 7px;
`;


export const Form = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 100%;

  & > div {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: flex-start;

    width: 100%;

    & > h3 {
      margin-left: 6%;
      margin-bottom: 10px;
    }
    & > input {
      width: 83%;
      margin: 0px 5% 10px 5%;
    }
    & > button {
        position: relative;
        top: -35px;
        left: 86%;
      }
    & > p {
      margin: 0px auto 15px auto;
    }
    & > nav {
      width: 100%;
      display: flex;
      & > .buttonRegister {
        text-decoration: none;
        font-size: 14px;
        font-weight: 500;
        width: 100%;
        height: 25px;
        border-radius: 7px;
        color: white;
        background-color: var(--lightGrey);
        margin: 15px 5% 30px 5%;
        padding: 9px 0px;
        text-align: center;
        transition: 0.3s;
        :hover {
          background-color: var(--mediumGrey);
        }
      }
    }
  }

  & > button {
    width: 90%;
    height: 40px;
    border-radius: 7px;
    background-color: var(--pink);
    margin: 0px 5% 25px 5%;
    font-size: 14px;
    font-weight: 500;
    transition: 0.3s;
    :hover {
      background-color: #ff427f;
    }
  }
`;

export const Title = styled.h1`
  margin: auto;
  margin-top: 35px;
  margin-bottom: 15px;
`;
