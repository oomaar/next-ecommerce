import { useState } from "react";
import carouselImages from "../../data/sliderData.json";
import { Slider } from "./Slider/Slider";
import { Arrows } from "./Arrows/Arrows";
import { CarouselContainer } from "./styledCarousel";

export const Carousel = () => {
  const len = carouselImages.length - 2;
  const [activeIndex, setActiveIndex] = useState(1);

  const prevSlide = () =>
    setActiveIndex(activeIndex < 1 ? len : activeIndex - 1);
  const nextSlide = () =>
    setActiveIndex(activeIndex === len ? 0 : activeIndex + 1);

  return (
    <CarouselContainer>
      <Slider data={carouselImages} activeIndex={activeIndex} />
      <Arrows prevSlide={prevSlide} nextSlide={nextSlide} />
    </CarouselContainer>
  );
};
