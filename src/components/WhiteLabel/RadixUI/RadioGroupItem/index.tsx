import { ReactNode } from "react";

import styled from "@emotion/styled";
import * as RadioGroup from "@radix-ui/react-radio-group";

import { useCompany } from "@/hooks/Company/useCompany";

interface RadioGroupItemProps extends RadioGroup.RadioGroupItemProps {
  children?: ReactNode;
}

interface RadioGroupItemContainerProps {
  primaryColour: string;
}

const RadioGroupItemContainer = styled.div<RadioGroupItemContainerProps>`
  button[role="radio"][aria-checked="true"] {
    border-color: ${({ primaryColour }) => primaryColour};
  }
`;

const RadioGroupItem = ({ children, ...rest }: RadioGroupItemProps) => {
  const { companyDetails } = useCompany();

  return (
    <RadioGroupItemContainer
      className="flex items-center justify-center"
      primaryColour={companyDetails.webSettings.primaryColour}
    >
      <RadioGroup.Item
        className="h-5 w-5 rounded-full border-4 aria-[checked=true]:border-[7px] aria-[checked=false]:border-copy-inactive"
        {...rest}
      >
        {children}
      </RadioGroup.Item>
    </RadioGroupItemContainer>
  );
};

export { RadioGroupItem };
