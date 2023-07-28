import "@testing-library/jest-dom";

import { ReactNode } from "react";

import { renderHook } from "@testing-library/react";

import { mockCompanyDetails } from "@/mocks/MockCompanyDetails";

import { CompanyProvider, useCompany } from "../Company/useCompany";

describe("useCompany", () => {
  it("should retrieve companyDetails object", () => {
    const wrapper = ({ children }: { children: ReactNode }) => (
      <CompanyProvider value={mockCompanyDetails}>{children}</CompanyProvider>
    );
    const { result } = renderHook(() => useCompany(), { wrapper });

    expect(result.current.companyDetails).toBe(mockCompanyDetails);
  });
});
