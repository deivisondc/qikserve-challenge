"use client";

import { HTMLProps } from "react";

import Link from "next/link";
import { usePathname } from "next/navigation";

import styled from "@emotion/styled";
import clsx from "clsx";

import { ROUTES } from "@/constants/routes";
import { useCompany } from "@/hooks/Company/useCompany";

interface NavBarItemsProps {
  containerClasses?: string;
}

interface NavBarItemsContainerProps extends HTMLProps<HTMLUListElement> {
  primaryColour: string;
  primaryColourHover: string;
}

const NavBarItemsContainer = styled.ul<NavBarItemsContainerProps>`
  background: ${({ primaryColour }) => primaryColour};

  li:not(.current):hover {
    text-decoration: underline;
  }
`;

const NavBarItems = ({ containerClasses }: NavBarItemsProps) => {
  const pathname = usePathname();
  const { companyDetails } = useCompany();

  const navItemClass = clsx(
    "flex items-center justify-center",
    "h-full w-58 text-white border-b-white",
  );

  return (
    <NavBarItemsContainer
      data-testid="navbar-items-container"
      className={containerClasses}
      primaryColour={companyDetails.webSettings.primaryColour}
      primaryColourHover={companyDetails.webSettings.primaryColourHover}
    >
      {Object.entries(ROUTES).map(([to, label]) => (
        <li
          key={to}
          className={clsx(navItemClass, {
            "current border-b-5": pathname === to,
          })}
        >
          <Link href={to}>{label}</Link>
        </li>
      ))}
    </NavBarItemsContainer>
  );
};

export { NavBarItems };
