import { ArrowsContainer, Arrow } from "./styledArrows";

export const Arrows = ({ nextSlide, prevSlide }) => {
  return (
    <ArrowsContainer>
      <Arrow onClick={prevSlide}>&#10094;</Arrow>
      <Arrow onClick={nextSlide}>&#10095;</Arrow>
    </ArrowsContainer>
  );
};
