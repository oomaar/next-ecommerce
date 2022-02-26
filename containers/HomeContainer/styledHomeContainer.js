import styled from "styled-components";
import { lgScreen } from "../../global/GlobalStyle";

export const HomeMain = styled.main`
  width: 1024px;
  margin: 1rem auto;

  @media screen and (max-width: ${lgScreen}) {
    width: 100%;
  }
`;
