import React, { ReactElement } from "react";
import Link from "next/link";
import { DesktopHeaderNavProps } from "./DesktopHeaderNav.types";
import { NavIconButton } from "../Header/Header.types";
import { IconButton } from "../Buttons/Buttons";
import MainNav from "./MainNav";

function DesktopHeaderNav({
  navLabels,
  isMobileMenuOpen,
  toggleMobileMenu,
  isActiveLink,
  getActiveLink,
  navIconButtons,
}: DesktopHeaderNavProps): ReactElement {
  return (
    <>
      <div className="flex">
        {!isMobileMenuOpen && (
          <IconButton
            iconPath="/icons/menu-line-horizontal.svg"
            alt="Menu"
            onClick={toggleMobileMenu}
            classNames="md:hidden"
          />
        )}
        <Link
          href="/"
          className="font-poppins text-[1rem] md:text-[1.5rem] font-medium leading-[1.5rem]"
        >
          ShopName
        </Link>
      </div>
      <MainNav navLabels={navLabels} isActiveLink={isActiveLink} />
      <div className="flex gap-x-4">
        {isMobileMenuOpen ? (
          <IconButton iconPath="/icons/close.svg" alt="Close" onClick={toggleMobileMenu} />
        ) : (
          navIconButtons.map(({ label, iconPath }: NavIconButton) => (
            <IconButton
              classNames={getActiveLink(label) ? "hidden md:block" : ""}
              iconPath={iconPath}
              alt={label}
            />
          ))
        )}
      </div>
    </>
  );
}

export default DesktopHeaderNav;
