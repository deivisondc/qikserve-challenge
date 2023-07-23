"use client";

import { ReactNode, createContext, useContext, useState } from "react";

interface ICompanyProvider {
  children: ReactNode;
  value: CompanyDetails;
}

type CompanyDetails = {
  id: number;
  name: string;
  locale: string;
  ccy: string;
  webSettings: {
    bannerImage: string;
    backgroundColour: string;
    primaryColour: string;
    primaryColourHover: string;
    navBackgroundColour: string;
  };
};

interface ICompanyContext {
  companyDetails: CompanyDetails;
}

const CompanyContext = createContext({} as ICompanyContext);

const CompanyProvider = ({ children, value }: ICompanyProvider) => {
  const [companyDetails] = useState(value);

  return (
    <CompanyContext.Provider value={{ companyDetails }}>
      {children}
    </CompanyContext.Provider>
  );
};

const useCompany = () => {
  return useContext(CompanyContext);
};

export { CompanyProvider, useCompany };
