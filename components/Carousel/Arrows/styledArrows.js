import styled from "styled-components";
import { lgScreen, mdScreen, transition } from "../../../global/GlobalStyle";

export const ArrowsContainer = styled.div`
  position: absolute;
  top: 20%;
  left: 0;
  right: 0;
  display: flex;
  justify-content: space-between;
  padding: 0 0.5rem;

  @media screen and (max-width: ${lgScreen}) {
    top: 10%;
  }

  @media screen and (max-width: ${mdScreen}) {
    top: 5%;
  }
`;

export const Arrow = styled.span`
  font-size: 2rem;
  cursor: pointer;
  transition: ${transition};
  border: 1px solid transparent;
  border-radius: 0.7rem;
  padding: 1rem;

  :hover {
    color: ${({ theme }) => theme.colors.firstColor};
    border: 1px solid #fff;
  }

  @media screen and (max-width: ${mdScreen}) {
    font-size: 1.5rem;
    padding: 0.5rem;
  }
`;
