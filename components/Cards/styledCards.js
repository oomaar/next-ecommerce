import styled from "styled-components";
import { mdScreen, smScreen } from "../../global/GlobalStyle";

export const CardsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);

  @media screen and (max-width: ${mdScreen}) {
    grid-template-columns: repeat(1, 1fr);
  }
`;

export const CardContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: ${smScreen};
  margin: 1rem auto;
  box-shadow: ${({ theme }) => theme.colors.shadowColor};
  border-radius: 1rem;
  padding: 1rem;
  background: ${({ theme }) => theme.colors.cardColor};

  @media screen and (max-width: ${mdScreen}) {
    width: 100%;
  }

  @media screen and (max-width: ${smScreen}) {
    flex-direction: column;
  }
`;

export const CardSubContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 50%;

  @media screen and (max-width: ${smScreen}) {
    width: 100%;
  }
`;

export const CardImage = styled.img`
  width: 150px;
  height: 200px;
  margin: 0 auto;
  box-shadow: ${({ theme }) => theme.colors.shadowColor};
  border-radius: 1rem;
`;

export const CardTitle = styled.h3`
  color: ${({ theme }) => theme.colors.titleColor};
`;

export const CardCategorey = styled.p`
  background: #63cf50;
  color: #fff;
  padding: 0.5rem 1rem;
  border-radius: 1rem;
  text-transform: capitalize;
`;

export const PriceContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 0 1rem;
`;

export const CardPrice = styled.strong`
  color: ${({ theme, red }) => (red ? "#ef5144" : theme.colors.titleColor)};
  text-decoration: ${({ red }) => red && "line-through"};
  font-size: ${({ red, theme }) =>
    red ? theme.typography.normalFontSize : "1.1rem"};
`;

export const CardNewPrice = styled.strong`
  color: ${({ theme }) => theme.colors.titleColor};
`;

export const CardRate = styled.div`
  color: ${({ theme }) => theme.colors.titleColor};

  strong {
    margin: 0 0.3rem;

    span {
      font-size: 1rem;
      color: #ffc017;
    }
  }

  @media screen and (max-width: ${smScreen}) {
    align-self: flex-end;
  }
`;

export const Buttons = styled.div`
  display: flex;
  gap: 0 1rem;
  margin-top: 1rem;

  @media screen and (max-width: ${smScreen}) {
    align-self: flex-end;
  }
`;
