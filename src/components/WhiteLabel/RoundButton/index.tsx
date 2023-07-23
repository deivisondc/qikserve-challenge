import { ButtonHTMLAttributes, ElementType } from "react";

import styled from "@emotion/styled";
import clsx from "clsx";

import { useCompany } from "@/hooks/Company/useCompany";

interface RoundButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  small?: boolean;
  icon: ElementType;
}

interface ButtonContainerProps {
  primaryColour: string;
  primaryColourHover: string;
}

const ButtonContainer = styled.button<ButtonContainerProps>`
  background: ${({ primaryColour }) => primaryColour};

  &:hover {
    background: ${({ primaryColourHover }) => primaryColourHover};
  }
`;

const RoundButton = ({ small, icon: Icon, ...rest }: RoundButtonProps) => {
  const {
    companyDetails: { webSettings },
  } = useCompany();

  return (
    <ButtonContainer
      primaryColour={webSettings.primaryColour}
      primaryColourHover={webSettings.primaryColourHover}
      className={clsx("flex items-center justify-center rounded-full", {
        "h-5 w-5": small,
        "h-8 w-8": !small,
      })}
      {...rest}
    >
      <Icon />
    </ButtonContainer>
  );
};

export { RoundButton };
