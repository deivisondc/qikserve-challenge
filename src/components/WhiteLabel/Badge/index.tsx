import { ReactNode } from "react";

import styled from "@emotion/styled";

import { useCompany } from "@/hooks/Company/useCompany";

interface BadgeProps {
  value: number;
}

interface BadgeContainerProps {
  primaryColour: string;
}

const BadgeContainer = styled.div<BadgeContainerProps>`
  background: ${({ primaryColour }) => primaryColour};
`;

const Badge = ({ value }: BadgeProps) => {
  const { companyDetails } = useCompany();

  if (!value) {
    return null;
  }

  return (
    <BadgeContainer
      className="flex min-h-[18px] min-w-[18px] items-center justify-center rounded-[4px] px-1 text-sm font-medium leading-none text-white"
      primaryColour={companyDetails.webSettings.primaryColour}
    >
      <span>{value}</span>
    </BadgeContainer>
  );
};

export { Badge };
