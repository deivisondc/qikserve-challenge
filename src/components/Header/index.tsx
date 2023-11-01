"use client";

import clsx from "clsx";

import { useCompany } from "@/hooks/Company/useCompany";

import { ImageLazyLoading } from "../ImageLazyLoading";
import { NavBar } from "../WhiteLabel/NavBar";
import { NavBarItems } from "../WhiteLabel/NavBar/NavBarItems";
import { NavBarMobile } from "./NavBarMobile";

const Header = () => {
  const { companyDetails } = useCompany();

  return (
    <header>
      <NavBar>
        <NavBarMobile />

        <NavBarItems
          containerClasses={clsx(
            "h-full text-xl uppercase",
            "hidden lg:flex lg:items-center lg:justify-center",
          )}
        />
      </NavBar>

      <div className="h-[150px] w-full">
        <picture>
          <ImageLazyLoading
            className="h-full w-full object-cover"
            imgSrc={companyDetails.webSettings.bannerImage}
            imgAlt="Banner"
          />
        </picture>
      </div>
    </header>
  );
};

export { Header };
