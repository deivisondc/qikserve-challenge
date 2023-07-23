import { ReactNode } from "react";

import styled from "@emotion/styled";

import { useCompany } from "@/hooks/Company/useCompany";

interface PrimaryButtonProps {
  children: ReactNode;
}

interface PrimaryButtonContainerProps {
  primaryColour: string;
  primaryColourHover: string;
}

const PrimaryButtonContainer = styled.button<PrimaryButtonContainerProps>`
  background: ${({ primaryColour }) => primaryColour};

  &:hover {
    background: ${({ primaryColourHover }) => primaryColourHover};
  }
`;

const PrimaryButton = ({ children }: PrimaryButtonProps) => {
  const { companyDetails } = useCompany();

  return (
    <PrimaryButtonContainer
      primaryColour={companyDetails.webSettings.primaryColour}
      primaryColourHover={companyDetails.webSettings.primaryColourHover}
      className="flex w-full items-center justify-center rounded-full py-3.5 font-medium text-white"
    >
      {children}
    </PrimaryButtonContainer>
  );
};

export { PrimaryButton };
