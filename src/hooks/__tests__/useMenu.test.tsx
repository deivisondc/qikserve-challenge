import "@testing-library/jest-dom";

import { ReactNode } from "react";

import { act, renderHook } from "@testing-library/react";

import { mockMenu } from "@/mocks/MockMenu";

import { MenuProvider, useMenu } from "../Menu/useMenu";

const setup = () => {
  const wrapper = ({ children }: { children: ReactNode }) => (
    <MenuProvider value={mockMenu}>{children}</MenuProvider>
  );

  const { result } = renderHook(() => useMenu(), { wrapper });

  return { result };
};

describe("useMenu", () => {
  it("should update filteredMenu based on filterQuery", () => {
    const { result } = setup();

    act(() => {
      result.current.handleSearchInputChange("caipirinha");
    });

    expect(result.current.filterQuery).toBe("caipirinha");
    expect(result.current.filteredMenu.sections).toHaveLength(1);
    expect(result.current.filteredMenu.sections[0].items).toHaveLength(1);
    expect(result.current.filteredMenu.sections[0].items[0].name).toBe(
      "Caipirinha",
    );
  });
});
