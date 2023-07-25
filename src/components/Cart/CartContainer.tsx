import clsx from "clsx";

import { CartContent } from "./CartContent";

const CartContainer = () => {
  return (
    <section
      className={clsx(
        "flex-shrink-0 flex-grow-0 basis-[300px] drop-shadow-lg",
        "lg:block",
        "hidden",
      )}
    >
      <CartContent />
    </section>
  );
};

export { CartContainer };
