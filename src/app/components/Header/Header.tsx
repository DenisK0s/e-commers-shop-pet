"use client";

import React, { useState } from "react";
import { usePathname } from "next/navigation";

import { NavLabel, NavIconButton } from "./Header.types";
import MobileHeaderNav from "../MobileHeaderNav/MobileHeaderNav";
import DesktopHeaderNav from "../DesktopHeaderNav";

const Header = () => {
  const pathname = usePathname();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const isActiveLink = (linkPathname: string): boolean =>
    linkPathname === pathname;

  // TODO: move to external file and import straight to the appropriate file
  const navLabels: NavLabel[] = [
    { label: "Home", labelIndex: 0, linkPathname: "/" },
    { label: "Shop", labelIndex: 1, linkPathname: "/shop" },
    { label: "Product", labelIndex: 2, linkPathname: "/product" },
    { label: "Contact", labelIndex: 3, linkPathname: "/contact" },
  ];

  // TODO: move to external file and import straight to the appropriate file
  const navIconButtons: NavIconButton[] = [
    { label: "Search", iconPath: "/icons/search02.svg" },
    { label: "My account", iconPath: "/icons/user-circle.svg" },
    { label: "Shopping bag", iconPath: "/icons/shoppingBag.svg" },
  ];

  const getActiveLink = (label: string): boolean => {
    const activeLinkIndex = navIconButtons.findIndex(
      (obj: NavIconButton) => obj.label === label,
    );

    return activeLinkIndex === 0 || activeLinkIndex === 1;
  };

  const toggleMobileMenu = (): void => setIsMobileMenuOpen(!isMobileMenuOpen);

  return (
    <header className="container mx-auto py-4 sm:px-8">
      <nav className="flex items-center justify-between">
        {DesktopHeaderNav({
          navLabels,
          isMobileMenuOpen,
          toggleMobileMenu,
          isActiveLink,
          getActiveLink,
          navIconButtons,
        })}
        {/*FIXME: <DesktopHeaderNav /> */}
        {isMobileMenuOpen &&
          MobileHeaderNav({ isMobileMenuOpen, navLabels, isActiveLink })}
        {/*FIXME: {isMobileMenuOpen && <MobileHeaderNav />} */}
      </nav>
    </header>
  );
};

export default Header;
