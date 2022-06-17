import React, { useEffect, useState } from "react";
import Slide from "./slide/slide";
import ContentItem from "./content-item/content-item";
import SliderContent from "./slider-content/slider-content";

import "./slider.css";

const getWidth =
  typeof window !== "undefined" ? () => window.innerWidth : () => 1;

const Slider = ({ slides, autoPlay, id  }) => {
  const [state, setState] = useState({
    activeIndex: 0,
    translate: 0,
    transition: 0.45,
  });
  const { translate, transition, activeIndex } = state;

  useEffect(() => {
    if (autoPlay) {
      const play = () => {
        nextSlide();
      };
      const interval = setInterval(play, autoPlay * 1000);

      return () => clearInterval(interval);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [activeIndex]);

  const nextSlide = () => {
    if (activeIndex === slides.length - 1) {
      return setState({
        ...state,
        translate: 0,
        activeIndex: 0,
      });
    }

    setState({
      ...state,
      activeIndex: activeIndex + 1,
      translate: (activeIndex + 1) * getWidth(),
    });
  };

  return (
    <div
      id={id}
      className='slider'
    >
      <SliderContent
        translate={translate}
        transition={transition}
        width={getWidth() * slides.length}
      >
        {slides.map((slide, index) => (
          <Slide key={index}>
              <ContentItem key={index} columnContent={slide} />
          </Slide>
        ))}
      </SliderContent>
    </div>
  );
};

export default Slider;
