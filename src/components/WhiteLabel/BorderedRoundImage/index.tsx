import { ImgHTMLAttributes } from "react";

import styled from "@emotion/styled";

import { useCompany } from "@/hooks/Company/useCompany";

interface ImageContainerProps {
  primaryColour: string;
  primaryColourHover: string;
}

export const ImageContainer = styled.img<ImageContainerProps>`
  border-color: ${({ primaryColour }) => primaryColour};

  &:hover {
    border-color: ${({ primaryColourHover }) => primaryColourHover};
  }
`;

const BorderedRoundImage = ({
  ...rest
}: ImgHTMLAttributes<HTMLImageElement>) => {
  const { companyDetails } = useCompany();

  return (
    <ImageContainer
      primaryColour={companyDetails.webSettings.primaryColour}
      primaryColourHover={companyDetails.webSettings.primaryColourHover}
      className="h-[75px] w-[75px] rounded-full border-2 object-cover p-0.5"
      {...rest}
    />
  );
};

export { BorderedRoundImage };
