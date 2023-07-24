import { ButtonHTMLAttributes, ReactNode } from "react";

import styled from "@emotion/styled";
import clsx from "clsx";

import { useCompany } from "@/hooks/Company/useCompany";

interface PrimaryButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  disabled?: boolean;
}

interface PrimaryButtonContainerProps {
  primaryColour: string;
  primaryColourHover: string;
  disabled: boolean;
}

const PrimaryButtonContainer = styled.button<PrimaryButtonContainerProps>`
  ${({ primaryColour, primaryColourHover, disabled }) =>
    !disabled &&
    `
    background: ${primaryColour};

    &:hover {
      background: ${primaryColourHover};
    }
  `};
`;

const PrimaryButton = ({
  children,
  disabled = false,
  ...rest
}: PrimaryButtonProps) => {
  const { companyDetails } = useCompany();

  return (
    <PrimaryButtonContainer
      primaryColour={companyDetails.webSettings.primaryColour}
      primaryColourHover={companyDetails.webSettings.primaryColourHover}
      className={clsx(
        "flex items-center justify-center",
        "w-full rounded-full py-3.5 font-medium text-white",
        {
          "bg-background-inactive": disabled,
        },
      )}
      disabled={disabled}
      {...rest}
    >
      {children}
    </PrimaryButtonContainer>
  );
};

export { PrimaryButton };
