import styled from "styled-components";
import { css } from "styled-components";
import { keyframes } from "styled-components";
import {
  lgScreen,
  mdScreen,
  smScreen,
  transition,
} from "../../global/GlobalStyle";

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

export const Nav = styled.nav`
  border-bottom: 1px solid ${({ theme }) => theme.colors.navBorder};
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.3rem 0.5rem;
  z-index: ${({ theme }) => theme.zIndex.zHeader};

  span {
    cursor: pointer;
    color: ${({ theme }) => theme.colors.titleColor};
  }

  @media screen and (max-width: ${smScreen}) {
    display: grid;
    gap: 2rem;
  }
`;

export const LogoContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  @media screen and (max-width: ${mdScreen}) {
    width: 70px;
    /* flex-direction: row; */
  }

  @media screen and (max-width: ${smScreen}) {
    grid-row: 1 / 2;
    width: 60px;
  }
`;

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

  @media screen and (max-width: ${lgScreen}) {
    width: ${({ showInput }) => (showInput ? "600px" : "0")};
  }

  @media screen and (max-width: ${mdScreen}) {
    width: ${({ showInput }) => (showInput ? "450px" : "0")};
    margin: 0 0.5rem;
  }

  @media screen and (max-width: ${smScreen}) {
    width: ${({ showInput }) => (showInput ? "100%" : "0")};
    grid-area: "search";
    grid-column: span 2;
    margin: 0 0 1.5rem;
  }
`;

export const SearchIcon = styled.div`
  background-color: ${({ theme }) => theme.colors.hoverColor};
  padding: 0.3rem;
  border-radius: 50%;
  cursor: pointer;
  transition: ${transition};
  animation: ${({ showInput }) =>
    !showInput &&
    css`
      ${Bounce} 4s linear infinite
    `};

  span {
    color: #fff;
  }

  @media screen and (max-width: ${smScreen}) {
    position: ${({ showInput }) => (!showInput ? "absolute" : "static")};
    left: 45%;
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

export const ButtonsContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 0 1rem;

  @media screen and (max-width: ${smScreen}) {
    grid-area: "logo";
    grid-row: 1 / 2;
  }
`;
