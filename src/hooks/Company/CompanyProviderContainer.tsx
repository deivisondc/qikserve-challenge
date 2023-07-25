import { ReactNode } from "react";

import { CompanyProvider } from "./useCompany";

interface CompanyProviderContainerProps {
  children: ReactNode;
}

const CompanyProviderContainer = async ({
  children,
}: CompanyProviderContainerProps) => {
  // const res = await fetch(
  //   `${process.env.NEXT_PUBLIC_BASE_URL}${process.env.NEXT_PUBLIC_COMPANY_RESOURCE}`,
  // );
  // const data = await res.json();
  const data = {
    id: 7602,
    name: "BURGERS RESTAURANT",
    internalName: "BURGERS RESTAURANT",
    description: null,
    liveFlag: 1,
    demoFlag: 1,
    address1: "Rua XX-X, 1-11",
    address2: "XXX",
    address3: null,
    city: "Bauru",
    county: "BR",
    postcode: "17012-360",
    country: "BR",
    timezoneOffset: "-03:00",
    locale: "pt-BR",
    timeZone: "America/Sao_Paulo",
    webSettings: {
      id: 5854,
      venueId: 7602,
      bannerImage:
        "https://preodemo.gumlet.io/usr/venue/7602/web/646fbf3abf9d0.png",
      backgroundColour: "#ffffff",
      primaryColour: "#4f372f",
      primaryColourHover: "#4f372f",
      navBackgroundColour: "#4f372f",
    },
    ccy: "BRL",
    ccySymbol: "R$",
    currency: "R$",
  };

  return <CompanyProvider value={data}>{children}</CompanyProvider>;
};

export { CompanyProviderContainer };
