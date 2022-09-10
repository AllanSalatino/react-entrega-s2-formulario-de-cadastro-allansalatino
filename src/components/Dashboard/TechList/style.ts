import styled from "styled-components";
import { ITech, IUser } from "../../../context/AuthContext";

interface IStyledProps{
  techs: ITech[] | undefined;
}

export const List = styled.ul`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  width: 75%;
  min-height: 50px;
  background: var(
    ${({ techs }: IStyledProps) => (techs ? "--mediumGrey" : "--black")}
  );
  border-radius: 3px;
  padding: 15px;

  @media (min-width: 1024px) {
    width: 78%;
  }
`;

export const Card = styled.li`
  list-style: none;
  width: 95%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 10px;
  background-color: var(--darkGrey);
  border-radius: 5px;
  margin: 5px 0px;
  transition: 0.5s;

  @media (min-width: 1024px) {
    width: 98%;
  }

  :hover {
    background-color: var(--lightGrey);
  }

  & > h3 {
    font-size: 14px;
    font-weight: 700;
  }

  & > div {
    width: 100px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;

    & > p {
      font-size: 12px;
      color: white;
    }
  }
`;
