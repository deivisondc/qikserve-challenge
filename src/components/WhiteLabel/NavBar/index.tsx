import { ReactNode } from "react";

import styled from "@emotion/styled";

import { useCompany } from "@/hooks/Company/useCompany";

interface NavBarProps {
  children: ReactNode;
}

interface NavBarContainerProps {
  primaryColour: string;
}

const NavBarContainer = styled.nav<NavBarContainerProps>`
  background: ${({ primaryColour }) => primaryColour};
`;

const NavBar = ({ children }: NavBarProps) => {
  const { companyDetails } = useCompany();

  return (
    <NavBarContainer
      data-testid="navbar-container"
      className="h-[52px]"
      primaryColour={companyDetails.webSettings.primaryColour}
    >
      {children}
    </NavBarContainer>
  );
};

export { NavBar };
