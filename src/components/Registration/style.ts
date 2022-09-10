import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  width: 100%;
  height: 100%;
`;

export const Header = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;

  width: 285px;

  margin-top: 15px;
  margin-bottom: 25px;

  & > nav {
    & > a {
      background: var(--darkGrey);
      color: white;
      padding: 10px 20px;
      border-radius: 7px;
      text-decoration: none;
      font-size: 12px;
    }
  }
`;

export const Main = styled.main`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;

  width: 300px;
  height: 700px;

  background-color: var(--darkGrey);
  border-radius: 7px;

  & > div {
    margin: auto;
    margin-bottom: 15px;
  }
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
      & > select {
        background-color: var(--mediumGrey);
        border-radius: 5px;
        padding: 10px;
        color: var(--white);
        outline: none;
        border: none;
        width: 90%;
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
  }

  & > button {
    width: 90%;
    height: 50px;

    border-radius: 7px;
    background-color: var(--registrationDisabled);
    
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
