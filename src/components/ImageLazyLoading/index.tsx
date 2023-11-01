"use client";

import { useRef, useState } from "react";

import clsx from "clsx";

interface ImageLazyLoadingProps {
  imgSrc: string;
  imgAlt: string;
  className: string;
}

const ImageLazyLoading = ({
  imgSrc,
  imgAlt,
  className,
}: ImageLazyLoadingProps) => {
  const [isLoading, setIsLoading] = useState(true);
  const image = useRef(null);

  const handleOnLoad = () => {
    console.log("onLoad");
    setIsLoading(false);
  };

  return (
    <>
      {isLoading ? "Loading..." : ""}
      <img
        ref={image}
        className={clsx({ hidden: isLoading, [className]: !isLoading })}
        src={imgSrc}
        alt={imgAlt}
        onLoad={handleOnLoad}
        onError={() => console.log("onError")}
      />
    </>
  );
};

export { ImageLazyLoading };
