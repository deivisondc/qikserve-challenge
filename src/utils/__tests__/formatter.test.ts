import { formatCurrency } from "../formatter";

describe("formatter", () => {
  describe("formatCurrency", () => {
    it("should formatted value with R$ symbol and use dot as thousand separator", () => {
      expect(
        formatCurrency(1000.52, { locale: "pt-BR", currency: "BRL" }),
      ).toBe("R$\xa01.000,52");
    });

    it("should formatted value with $ symbol and comma as thousand separator", () => {
      expect(
        formatCurrency(1000.52, { locale: "en-US", currency: "USD" }),
      ).toBe("$1,000.52");
    });
  });
});
