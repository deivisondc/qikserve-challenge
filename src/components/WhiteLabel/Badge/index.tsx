import { ReactNode } from "react";

import styled from "@emotion/styled";

import { useCompany } from "@/hooks/Company/useCompany";

interface BadgeProps {
  children: ReactNode;
}

interface BadgeContainerProps {
  primaryColour: string;
}

const BadgeContainer = styled.div<BadgeContainerProps>`
  background: ${({ primaryColour }) => primaryColour};
`;

const Badge = ({ children }: BadgeProps) => {
  const { companyDetails } = useCompany();

  return (
    <BadgeContainer
      className="flex h-[18px] w-[18px] items-center justify-center rounded-md text-sm font-medium text-white"
      primaryColour={companyDetails.webSettings.primaryColour}
    >
      {children}
    </BadgeContainer>
  );
};

export { Badge };
