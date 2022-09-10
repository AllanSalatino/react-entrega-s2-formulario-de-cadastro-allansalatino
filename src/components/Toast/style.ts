import styled, { css, keyframes } from "styled-components";

interface IStyledProps{
  isSuccess: boolean;
  isLeave: boolean;
}

const translateXAnimationFrom = keyframes`
  0% {
    background: transparent;
    transform: translateX(120%);
  }
  95% {
    transform: translateX(-20px);
  }
  100% {
    transform: translateX(0);
  }
`;

const translateXAnimationLeave = keyframes`
  from {
    transform: translateX(0) ;
  }
  to {
    background: transparent;
    transform: translateX(120%);
  }
`;

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 360px;
  display: flex;
  position: relative;
  background: ${({isSuccess}: IStyledProps) => isSuccess ? "#1eff00" : "#ef0000"};
  padding: 10px 30px 10px 16px;
  margin: 20px 22px 0;
  border-radius: 10px;
  ${({ isLeave }) =>
    css`
      animation: ${isLeave ? translateXAnimationLeave : translateXAnimationFrom}
        0.8s;
    `}
  animation-fill-mode: forwards;
  > svg {
    margin: 4px 12px 0 0;
  }
  div {
    strong {
      font-weight: bold;
    }
    p {
      color: white;
      margin-top: 4px;
      font-size: 14px;
    }
  }
  button {
    position: absolute;
    right: 16px;
    top: 19px;
    border: 0;
    background: transparent;
    color: inherit;

    & > svg{
        font-size: 25px;
    }
  }
`;
