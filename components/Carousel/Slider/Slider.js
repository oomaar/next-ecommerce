import { SliderContainer, SliderImage } from "./styledSlider";

export const Slider = ({ data, activeIndex }) => {
  return (
    <SliderContainer>
      {data.map((img) => (
        <SliderImage
          key={img.id}
          activeIndex={activeIndex}
          className={(img.id === activeIndex && "active").toString()}
        >
          <img src={img.img} alt="Slider Image" />
        </SliderImage>
      ))}
    </SliderContainer>
  );
};
