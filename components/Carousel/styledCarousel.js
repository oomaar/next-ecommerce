import styled from "styled-components";
import { smScreen } from "../../global/GlobalStyle";

export const CarouselContainer = styled.div`
  position: relative;
  overflow: hidden;

  @media screen and (max-width: ${smScreen}) {
    display: none;
  }
`;
