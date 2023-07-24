import { useEffect, useState } from "react";

import clsx from "clsx";

import { Minus } from "../Icons/Minus";
import { Plus } from "../Icons/Plus";
import { RoundButton } from "../WhiteLabel/RoundButton";

interface CounterProps {
  minValue?: number;
  maxValue?: number;
  small?: boolean;
  initialValue?: number;
  onValueChange?: (value: number) => void;
}

const Counter = ({
  minValue = 0,
  maxValue = 3,
  small,
  initialValue,
  onValueChange,
}: CounterProps) => {
  const [counter, setCounter] = useState(initialValue ?? minValue);

  const handleIncrease = () => {
    if (maxValue && counter < maxValue) {
      const newCounter = counter + 1;

      setCounter(newCounter);
      onValueChange && onValueChange(newCounter);
    }
  };

  const handleDecrease = () => {
    if (counter > minValue) {
      const newCounter = counter - 1;

      setCounter(newCounter);
      onValueChange && onValueChange(newCounter);
    }
  };

  return (
    <div
      className={clsx("flex w-fit items-center justify-between", {
        "gap-1": small,
        "gap-4": !small,
      })}
    >
      <RoundButton
        icon={Minus}
        onClick={handleDecrease}
        small={small}
        disabled={counter === minValue}
      />

      <span className="flex min-w-[30px] justify-center font-bold">
        {counter}
      </span>

      <RoundButton
        icon={Plus}
        onClick={handleIncrease}
        small={small}
        disabled={counter === maxValue}
      />
    </div>
  );
};

export { Counter };
