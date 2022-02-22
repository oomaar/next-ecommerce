import styled from "styled-components";
import { css } from "styled-components";
import { keyframes } from "styled-components";
import { transition } from "../../global/GlobalStyle";

const Bounce = keyframes`
  0% {
    transform: translateY(0);
  }

  50% {
    transform: translateY(-20px);
  }

  100% {
    transform: translateY(0);
  }
`;

const animation = (props) =>
  css`
    animation: ${Bounce} ${props.showInput} 4s infinite alternate;
  `;

export const Nav = styled.nav`
  border-bottom: 1px solid ${({ theme }) => theme.colors.navBorder};
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.3rem 0.5rem;

  span {
    cursor: pointer;
    color: ${({ theme }) => theme.colors.textColor};
  }
`;

export const LogoContainer = styled.div``;

export const SearchContainer = styled.div`
  display: flex;
  align-items: center;
  border-radius: 1rem;
  padding-left: 1rem;
  transition: ${transition};
  background: ${({ theme }) => theme.colors.navBorder};
  height: ${({ showInput }) => (showInput ? "50px" : "0")};
  width: ${({ showInput }) => (showInput ? "800px" : "0")};
  box-shadow: ${({ theme, showInput }) =>
    showInput && theme.colors.shadowColor};
`;

export const SearchIcon = styled.div`
  background-color: ${({ theme }) => theme.colors.hoverColor};
  padding: 0.3rem;
  border-radius: 50%;
  cursor: pointer;
  animation: ${({ showInput }) =>
    !showInput &&
    css`
      ${Bounce} 4s linear infinite
    `};

  span {
    color: #fff;
  }
`;

export const SearchInput = styled.input`
  background: transparent;
  height: 100%;
  border: 0;
  outline: 0;
  font-size: 1.2rem;
  letter-spacing: 0.05rem;
  padding-left: 0.8rem;
  transition: ${transition};
  width: ${({ showInput }) => (showInput ? "100%" : "0")};
`;

export const ButtonsContainer = styled.div``;
