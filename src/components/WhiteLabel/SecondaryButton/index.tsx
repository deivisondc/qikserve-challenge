"use client";

import { ReactNode } from "react";

import styled from "@emotion/styled";

import { useCompany } from "@/hooks/Company/useCompany";

interface SecondaryButtonProps {
  children: ReactNode;
}

interface SecondaryButtonContainerProps {
  primaryColour: string;
  primaryColourHover: string;
}

const SecondaryButtonContainer = styled.button<SecondaryButtonContainerProps>`
  color: ${({ primaryColour }) => primaryColour};

  &:hover {
    color: ${({ primaryColourHover }) => primaryColourHover};
  }
`;

const SecondaryButton = ({ children }: SecondaryButtonProps) => {
  const { companyDetails } = useCompany();

  return (
    <SecondaryButtonContainer
      className="flex w-full items-center justify-center bg-white font-bold underline"
      primaryColour={companyDetails.webSettings.primaryColour}
      primaryColourHover={companyDetails.webSettings.primaryColourHover}
    >
      {children}
    </SecondaryButtonContainer>
  );
};

export { SecondaryButton };
