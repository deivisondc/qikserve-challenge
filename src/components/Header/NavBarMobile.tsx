"use client";

import { useState } from "react";

import clsx from "clsx";

import { Hamburger } from "@/components/Icons/Hamburger";
import { X } from "@/components/Icons/X";
import { NavBarItems } from "@/components/WhiteLabel/NavBar/NavBarItems";

const NavBarMobile = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);

  return (
    <div className="relative flex h-full items-center justify-center p-4 text-white lg:hidden">
      <h1 className="flex flex-1 justify-center text-lg font-medium tracking-[0.75px]">
        Menu
      </h1>
      <button
        data-testid="hamburger-menu-button"
        onClick={() => setIsNavOpen(!isNavOpen)}
      >
        <Hamburger />
      </button>

      {isNavOpen && (
        <>
          <div
            onClick={() => setIsNavOpen(!isNavOpen)}
            className="absolute top-0 h-[100vh] w-full bg-black opacity-60"
            style={{ zIndex: "calc(var(--button-index) + 10)" }}
          />
          <NavBarItems
            containerClasses={clsx(
              "absolute top-0",
              "w-full text-xl uppercase p-4",
              "flex flex-col items-center justify-center gap-4",
            )}
          />

          <button
            data-testid="navbar-close-button"
            onClick={() => setIsNavOpen(!isNavOpen)}
            className="absolute right-0 top-0 m-1 p-4"
          >
            <X className="fill-white" />
          </button>
        </>
      )}
    </div>
  );
};

export { NavBarMobile };
