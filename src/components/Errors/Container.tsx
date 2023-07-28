import { ReactNode } from "react";

import clsx from "clsx";

interface ContainerProps {
  children: ReactNode;
}

const Container = ({ children }: ContainerProps) => {
  return (
    <main className={clsx("flex flex-col items-center justify-between p-4")}>
      <div
        className={clsx(
          "flex w-full flex-1 gap-6 bg-white",
          "lg:flex-row lg:px-10 lg:py-8",
          "flex-col",
        )}
      >
        {children}
      </div>
    </main>
  );
};

export { Container };
