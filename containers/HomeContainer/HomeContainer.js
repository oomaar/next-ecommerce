import { Cards, Carousel } from "../../components";
import { HomeMain } from "./styledHomeContainer";

export const HomeContainer = ({ data }) => {
  return (
    <HomeMain>
      <Carousel />
      <Cards data={data} />
    </HomeMain>
  );
};
