import styled from "styled-components";
import { keyframes } from "styled-components";

const spin = keyframes`
  0% {
    transform: rotate(0deg);
  }

  100% {
    transform: rotate(360deg);
  }
`;

export const LoadingContainer = styled.div`
  background: ${({ theme }) => theme.colors.bodyColor};
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: ${({ theme }) => theme.zIndex.zLoading};
`;

export const Loader = styled.div`
  display: inline-block;
  width: 80px;
  height: 80px;

  ::after {
    content: " ";
    display: block;
    width: 64px;
    height: 64px;
    margin: 8px;
    border-radius: 50%;
    border: 6px solid ${({ theme }) => theme.colors.titleColor};
    border-color: ${({ theme }) => theme.colors.titleColor} transparent
      ${({ theme }) => theme.colors.titleColor} transparent;
    animation: ${spin} 1.2s linear infinite;
  }
`;
