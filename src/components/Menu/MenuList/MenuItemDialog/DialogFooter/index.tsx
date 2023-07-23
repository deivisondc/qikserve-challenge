"use client";

import * as Dialog from "@radix-ui/react-dialog";

import { Counter } from "@/components/Counter";
import { PrimaryButton } from "@/components/WhiteLabel/PrimaryButton";
import { useCompany } from "@/hooks/Company/useCompany";
import { formatCurrency } from "@/utils/formatCurrency";

interface DialogFooterProps {}

const DialogFooter = ({}: DialogFooterProps) => {
  const { companyDetails } = useCompany();

  return (
    <div className="sticky bottom-0 flex w-full flex-col items-center gap-2 bg-transparent p-6 pt-2 backdrop-blur-sm">
      <Counter />

      <Dialog.Close className="w-full">
        <PrimaryButton>
          Add to order -{" "}
          {formatCurrency(32, {
            locale: companyDetails.locale,
            currency: companyDetails.ccy,
          })}
        </PrimaryButton>
      </Dialog.Close>
    </div>
  );
};

export { DialogFooter };
