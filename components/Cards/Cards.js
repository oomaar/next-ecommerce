import { Icon } from "@material-ui/core";
import Link from "next/link";
import { Button } from "../../global/GlobalStyle";
import {
  CardsContainer,
  CardSubContainer,
  CardContainer,
  CardImage,
  CardTitle,
  CardCategorey,
  CardPrice,
  CardNewPrice,
  Buttons,
  CardRate,
  PriceContainer,
} from "./styledCards";

export const Cards = ({ data }) => {
  const discount = data.map(({ price }) => {
    const newPrice = price >= 100 && (price * 50) / 100;
    return newPrice;
  });

  const cardsData = data.map((card, i) => (
    <CardContainer key={card.id}>
      <CardImage src={card.image} alt={card.title} />
      <CardSubContainer>
        <Link href={`/product/${card.id}`}>
          <CardTitle>{card.title}</CardTitle>
        </Link>
        <PriceContainer>
          <CardPrice red={card.price >= 100}>${card.price}</CardPrice>
          <CardNewPrice>{`${card.price >= 100 ? "$" + discount[i] : ""
            }`}</CardNewPrice>
        </PriceContainer>
        <CardCategorey>{card.category}</CardCategorey>
        <CardRate>
          <strong>
            {card.rating.rate} <Icon>star</Icon>
          </strong>{" "}
          - <strong>{card.rating.count} views</strong>
        </CardRate>
        <Buttons>
          <Button>View</Button>
          <Button>Add to Cart</Button>
        </Buttons>
      </CardSubContainer>
    </CardContainer>
  ));

  return <CardsContainer>{cardsData}</CardsContainer>;
};
