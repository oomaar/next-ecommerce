import styled from "styled-components";
import { transition } from "../../../global/GlobalStyle";

export const SliderContainer = styled.div`
  display: flex;
  overflow: hidden;
  height: 200px;
`;

export const SliderImage = styled.div`
  overflow: hidden;
  width: 0;
  opacity: 0;
  visibility: hidden;
  transition: ${transition};

  &.active {
    width: 100%;
    opacity: 1;
    visibility: visible;
  }

  img {
    display: block;
    width: 100%;
  }
`;
