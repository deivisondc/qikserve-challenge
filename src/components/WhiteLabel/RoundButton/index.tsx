import { ButtonHTMLAttributes, ElementType } from "react";

import styled from "@emotion/styled";
import clsx from "clsx";

import { useCompany } from "@/hooks/Company/useCompany";

interface RoundButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  small?: boolean;
  icon: ElementType;
  disabled?: boolean;
}

interface ButtonContainerProps {
  primaryColour: string;
  primaryColourHover: string;
}

const ButtonContainer = styled.button<ButtonContainerProps>`
  ${({ primaryColour, primaryColourHover, disabled }) =>
    !disabled &&
    `
    background: ${primaryColour};

    &:hover {
      background: ${primaryColourHover};
    }
  `};
`;

const RoundButton = ({
  small,
  icon: Icon,
  disabled = false,
  ...rest
}: RoundButtonProps) => {
  const {
    companyDetails: { webSettings },
  } = useCompany();

  return (
    <ButtonContainer
      data-testid="round-button"
      primaryColour={webSettings.primaryColour}
      primaryColourHover={webSettings.primaryColourHover}
      className={clsx("flex items-center justify-center rounded-full", {
        "h-5 w-5": small,
        "h-8 w-8": !small,
        "bg-background-inactive": disabled,
      })}
      disabled={disabled}
      {...rest}
    >
      <Icon />
    </ButtonContainer>
  );
};

export { RoundButton };
