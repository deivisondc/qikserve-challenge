import { ReactNode } from "react";

import { render as renderRTL } from "@testing-library/react";

import { CartProvider, ICartContext } from "@/hooks/Cart/useCart";
import { CompanyProvider } from "@/hooks/Company/useCompany";
import { MenuProvider } from "@/hooks/Menu/useMenu";
import { mockCompanyDetails } from "@/mocks/MockCompanyDetails";
import { mockMenu } from "@/mocks/MockMenu";

export const renderWithProviders = (children: ReactNode) => {
  return renderRTL(
    <CompanyProvider value={mockCompanyDetails}>
      <MenuProvider value={mockMenu}>
        <CartProvider>{children}</CartProvider>
      </MenuProvider>
    </CompanyProvider>,
  );
};
