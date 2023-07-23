import { useState } from "react";

import clsx from "clsx";

import { Minus } from "../Icons/Minus";
import { Plus } from "../Icons/Plus";
import { RoundButton } from "../WhiteLabel/RoundButton";

interface CounterProps {
  small?: boolean;
}

const Counter = ({ small }: CounterProps) => {
  const [counter, setCounter] = useState(0);

  const handleIncrease = () => {
    setCounter((state) => state + 1);
  };

  const handleDecrease = () => {
    setCounter((state) => state - 1);
  };

  return (
    <div
      className={clsx("flex items-center justify-between", {
        "gap-1": small,
        "gap-4": !small,
      })}
    >
      <RoundButton icon={Minus} onClick={handleDecrease} small={small} />
      <span className="flex min-w-[30px] justify-center font-bold">
        {counter}
      </span>
      <RoundButton icon={Plus} onClick={handleIncrease} small={small} />
    </div>
  );
};

export { Counter };
