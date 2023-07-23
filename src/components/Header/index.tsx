"use client";

import Link from "next/link";

import clsx from "clsx";

import { useCompany } from "@/hooks/Company/useCompany";

import { NavBar } from "../WhiteLabel/NavBar";

const Header = () => {
  const { companyDetails } = useCompany();

  const navItemClass =
    "flex h-full w-58 items-center justify-center text-white border-b-white";

  return (
    <header>
      <NavBar>
        <ul
          className={clsx(
            "h-full text-xl uppercase",
            "hidden md:flex md:items-center md:justify-center",
          )}
        >
          <li className={clsx(navItemClass, "border-b-5")}>
            <Link href="/">Menu</Link>
          </li>
          <li className={navItemClass}>
            <Link href="/login">Entrar</Link>
          </li>
          <li className={navItemClass}>
            <Link href="/contact">Contato</Link>
          </li>
        </ul>
      </NavBar>

      <div className="h-[150px] w-full bg-green-900">
        <picture>
          <img
            className="h-full w-full object-cover"
            src={companyDetails.webSettings.bannerImage}
            alt="Banner"
          />
        </picture>
      </div>
    </header>
  );
};

export { Header };
