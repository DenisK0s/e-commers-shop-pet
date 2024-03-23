import React from "react";
import Link from "next/link";
import { IconButton } from "components/shared/Buttons";
import Navigation from "components/Navigation/Navigation";
import { DesktopHeaderProps } from "components/Navigation/Navigation.types";

function DesktopHeader({
  isMobileMenuOpen,
  toggleMobileMenu,
  isActiveLink,
}: DesktopHeaderProps) {
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
      <Navigation isActiveLink={isActiveLink} isMobile={false} />
    </>
  );
}

export default DesktopHeader;
