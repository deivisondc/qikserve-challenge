import { useState } from "react";

import clsx from "clsx";

import { ChevronDown } from "../Icons/ChevronDown";

interface CarouselProps {
  imagesSrc: string[];
  alt: string;
}

const Carousel = ({ imagesSrc, alt }: CarouselProps) => {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <div className="relative">
      <img
        data-testid="carousel-image"
        src={imagesSrc[activeIndex]}
        alt={alt}
        height="320px"
        className="object-cover"
      />

      {imagesSrc.length > 1 && (
        <>
          <button
            data-testid="previous-button"
            disabled={activeIndex === 0}
            onClick={() => setActiveIndex(activeIndex - 1)}
            className={clsx(
              "absolute left-4 top-[50%] flex -translate-y-[50%] -rotate-90 items-center justify-center rounded-full p-1",
              {
                "bg-background-inactive opacity-60": activeIndex === 0,
                "bg-white": activeIndex !== 0,
              },
            )}
          >
            <ChevronDown
              className={clsx({
                "fill-copy-inactive": activeIndex === 0,
              })}
            />
          </button>
          <button
            data-testid="next-button"
            disabled={activeIndex === imagesSrc.length - 1}
            onClick={() => setActiveIndex(activeIndex + 1)}
            className={clsx(
              "absolute right-4 top-[50%] flex -translate-y-[50%] rotate-90 items-center  justify-center rounded-full p-1",
              {
                "bg-background-inactive opacity-60":
                  activeIndex === imagesSrc.length - 1,
                "bg-white": activeIndex !== imagesSrc.length - 1,
              },
            )}
          >
            <ChevronDown
              className={clsx({
                "fill-copy-inactive": activeIndex === imagesSrc.length - 1,
              })}
            />
          </button>
        </>
      )}
    </div>
  );
};

export { Carousel };
