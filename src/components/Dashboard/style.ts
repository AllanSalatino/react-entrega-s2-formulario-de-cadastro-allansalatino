import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;

  width: 100%;
  height: 100vh;
`;

export const Header = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;

  width: 100%;
  height: 60px;

  border-bottom: 1px solid var(--mediumGrey);

  & > img {
    margin-left: 10%;
  }
  & > nav {
    margin-right: 10%;
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
  align-items: center;

  width: 100%;

  & > div {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;

    width: 100%;

    border-bottom: 1px solid var(--mediumGrey);

    gap: 15px;
    padding: 20px 20%;

    & > h1 {
      font-size: 18px;
      margin-left: 10%
    }
    & > p {
      font-size: 12px;
      margin-left: 10%
    }

    @media (min-width: 600px) {
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      align-items: center;

      & > p {
        margin-right: 10%;
        margin-left: 0%
      }
    }
  }

  & > section {
    width: 100%;
    margin: 20px 0px;

    & > div {
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      align-items: center;

      width: 100%;
      height: 30px;

      & > h3 {
        font-size: 16px;
        font-weight: 700;
        margin-left: 10%;
      }
      & > button {
        margin-right: 10%;

        .iconPlus {
          font-size: 10px;
          background-color: var(--darkGrey);

          padding: 10px;

          border-radius: 5px;
        }
      }
    }
  }
`;
