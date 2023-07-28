"use client";

import { useEffect, useState } from "react";

import clsx from "clsx";

import { Minus } from "../Icons/Minus";
import { Plus } from "../Icons/Plus";
import { RoundButton } from "../WhiteLabel/RoundButton";

interface CounterProps {
  minValue?: number;
  maxValue?: number;
  small?: boolean;
  value?: number;
  onValueChange?: (value: number) => void;
}

const Counter = ({
  minValue = 0,
  maxValue = 99,
  small,
  value,
  onValueChange,
}: CounterProps) => {
  const [counter, setCounter] = useState(value ?? minValue);

  useEffect(() => {
    if (value !== undefined) {
      setCounter(value);
    }
  }, [value]);

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
      data-testid="counter-container"
      className={clsx("flex w-fit items-center justify-between", {
        "gap-1": small,
        "gap-4": !small,
      })}
    >
      <RoundButton
        data-testid="counter-decrease-button"
        icon={Minus}
        onClick={handleDecrease}
        small={small}
        disabled={counter === minValue}
      />

      <span className="flex min-w-[30px] justify-center font-bold">
        {counter}
      </span>

      <RoundButton
        data-testid="counter-increase-button"
        icon={Plus}
        onClick={handleIncrease}
        small={small}
        disabled={counter === maxValue}
      />
    </div>
  );
};

export { Counter };
