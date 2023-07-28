type CompanyOptions = {
  locale: string;
  currency: string;
};

export const formatCurrency = (
  value: number,
  { locale, currency }: CompanyOptions,
) => {
  return new Intl.NumberFormat(locale, { style: "currency", currency }).format(
    value,
  );
};
