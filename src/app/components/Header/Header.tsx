"use client";

import React, { useState } from "react";
import { usePathname } from "next/navigation";

import { IconButton } from "components/shared/Buttons";
import { headerIconButtons } from "components/Navigation/nav-config";
import { HeaderIconButton } from "components/Navigation/Navigation.types";
import { DesktopHeader } from "components/DesktopHeader";
import { MobileHeaderMenu } from "components/MobileHeader";

const Header = () => {
  const pathname = usePathname();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const isActiveLink = (linkPathname: string): boolean =>
    linkPathname === pathname;

  const getActiveLink = (label: string): boolean => {
    const activeLinkIndex = headerIconButtons.findIndex(
      (obj: HeaderIconButton) => obj.label === label,
    );

    return activeLinkIndex === 1;
  };

  const toggleMobileMenu = (): void => setIsMobileMenuOpen(!isMobileMenuOpen);

  return (
    <header className="container mx-auto py-4 flex items-center justify-between">
      <nav className={`flex items-center justify-between md:w-3/4 lg:w-4/6 `}>
        {
          <DesktopHeader
            isMobileMenuOpen={isMobileMenuOpen}
            toggleMobileMenu={toggleMobileMenu}
            isActiveLink={isActiveLink}
          />
        }
        {isMobileMenuOpen && (
          <MobileHeaderMenu
            isMobile={isMobileMenuOpen}
            isActiveLink={isActiveLink}
          />
        )}
      </nav>
      <div className="flex gap-x-4">
        {isMobileMenuOpen ? (
          <IconButton
            iconPath="/icons/close.svg"
            alt="Close"
            onClick={toggleMobileMenu}
          />
        ) : (
          headerIconButtons.map(({ label, iconPath }: HeaderIconButton) => (
            <IconButton
              classNames={getActiveLink(label) ? "hidden md:block" : ""}
              iconPath={iconPath}
              alt={label}
              key={label}
            />
          ))
        )}
      </div>
    </header>
  );
};

export default Header;
