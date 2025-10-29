import React, { useState, useEffect} from "react";
import "../index.css";
import type { ReactNode } from "react";

interface CustomCarouselProps {
  children: ReactNode[];
}

const CustomCarousel: React.FC<CustomCarouselProps> = ({ children }) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [slideDone, setSlideDone] = useState(true);
  const [timeID, setTimeID] = useState<ReturnType<typeof setTimeout> | null>(null);

  // التحريك التلقائي كل 5 ثواني
  useEffect(() => {
    if (slideDone) {
      const id = setTimeout(() => {
        slideNext();
      }, 5000);
      setTimeID(id);
    }

    return () => {
      if (timeID) clearTimeout(timeID);
    };
  }, [activeIndex, slideDone]);

  const slideNext = () => {
    setActiveIndex((prev) => (prev >= children.length - 1 ? 0 : prev + 1));
  };

  const slidePrev = () => {
    setActiveIndex((prev) => (prev <= 0 ? children.length - 1 : prev - 1));
  };

  const toggleAutoPlay = () => {
    if (slideDone) {
      if (timeID) clearTimeout(timeID);
      setSlideDone(false);
    } else {
      setSlideDone(true);
    }
  };

  return (
    <div className="container__slider">
      {children.map((child, index) => (
        <div
          key={index}
          className={`slider__item slider__item-active-${activeIndex + 1}`}
        >
          {child}
        </div>
      ))}

      <div className="controls">
        <button className="slider__btn" onClick={slidePrev}>
          &lt;
        </button>

        {children.map((_, index) => (
          <button
            key={index}
            className={
              activeIndex === index
                ? "container__slider__links-small container__slider__links-small-active"
                : "container__slider__links-small"
            }
            onClick={() => setActiveIndex(index)}
          ></button>
        ))}

        <button className="slider__btn" onClick={slideNext}>
          &gt;
        </button>

        <button className="pause-button" onClick={toggleAutoPlay}>
          {slideDone ? "⏸" : "▶"}
        </button>
      </div>
    </div>
  );
};

export default CustomCarousel;