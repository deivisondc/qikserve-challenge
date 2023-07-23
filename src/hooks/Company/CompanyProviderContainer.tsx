import { ReactNode } from "react";

import { CompanyProvider } from "./useCompany";

interface CompanyProviderContainerProps {
  children: ReactNode;
}

const CompanyProviderContainer = async ({
  children,
}: CompanyProviderContainerProps) => {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}${process.env.NEXT_PUBLIC_COMPANY_RESOURCE}`,
  );
  const data = await res.json();

  return <CompanyProvider value={data}>{children}</CompanyProvider>;
};

export { CompanyProviderContainer };
