"use client";

import React, { ReactElement } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import Image from "next/image";

type MobileMenuProps = {
  isMobileMenuOpen: boolean;
  navLabels: NavLabel[];
  isActiveLink: (linkPathname: string) => boolean;
};

const MobileMenu = function ({ navLabels }: MobileMenuProps): ReactElement<MobileMenuProps> {
  return (
    <div className="block absolute top-10 pt-4 px-6 w-screen left-0 overflow-hidden bg-white">
      <div className={` flex items-center border rounded  mb-4`}>
        <div className="size-6  ml-4 mt-6 absolute  inset-y-0 flex items-center pl-3 pointer-events-none">
          {" "}
          <Image src="/icons/search02.svg" alt="Search" layout="fill" objectFit="cover" />
        </div>

        <input
          type="text"
          placeholder="Search"
          className=" pl-12 pr-4  py-2 w-full rounded-md border border-neutral-dark-gray focus:ring-2 focus:ring-gray-500 focus:border-transparent"
        />
      </div>
      <ul className="pb-4 mb-12">
        {navLabels.map(({ label, labelIndex }: NavLabel) => (
          <li
            key={labelIndex}
            className=" flex justify-between w-full py-4 border-b border-solid border-neutral-gray "
          >
            <Link
              href="/"
              className={`  text-neutral-dark
               text-button-xs font-inter`}
            >
              {label}
            </Link>
            {(labelIndex === 1 || labelIndex === 2) && (
              <div className="size-6  relative">
                <Image src="/icons/chevron-down.svg" alt="Search" layout="fill" objectFit="cover" />
              </div>
            )}
          </li>
        ))}
      </ul>
      <div className="sticky bottom-0">
        <ul>
          <li className="flex justify-between py-2 border-b border-solid border-neutral-gray">
            <span>Cart</span>
            <div className="flex items-center">
              <div className="size-6  relative">
                <Image src="/icons/shoppingBag.svg" alt="Search" layout="fill" objectFit="cover" />
              </div>
              <span className="flex size-5 bg-neutral-dark text-white items-center justify-center rounded-full">
                2
              </span>
            </div>
          </li>
          <li className="flex justify-between py-2 border-b border-solid border-neutral-gray">
            <span>Wishlist</span>
            <div className="flex items-center">
              <div className="size-6  relative">
                <Image src="/icons/shoppingBag.svg" alt="Search" layout="fill" objectFit="cover" />
              </div>
              <span className="size-5 bg-neutral-dark text-white items-center justify-center flex rounded-full  font-inter font-bold text-[0.75rem]">
                2
              </span>
            </div>
          </li>
        </ul>
        <button
          type="button"
          className="p-button-primary my-4 w-full text-white bg-neutral-dark rounded-md"
        >
          Sign In
        </button>
        <ul className="flex gap-x-6">
          <li className="size-6  relative">
            <Image src="/icons/instagram.svg" alt="Instagram" layout="fill" objectFit="cover" />
          </li>
          <li className="size-6  relative">
            <Image src="/icons/facebook.svg" alt="Facebook" layout="fill" objectFit="cover" />
          </li>
          <li className="size-6  relative">
            <Image src="/icons/youtube.svg" alt="Youtube" layout="fill" objectFit="cover" />
          </li>
        </ul>
      </div>
    </div>
  );
};

type NavLabel = {
  label: string;
  linkPathname: string;
  labelIndex: number;
};

type NavIconButton = {
  label: string;
  iconPath: string;
};

const Header = function (): ReactElement {
  const pathname = usePathname();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);
  const isActiveLink = (linkPathname: string): boolean => linkPathname === pathname;

  const navLabels: NavLabel[] = [
    { label: "Home", labelIndex: 0, linkPathname: "/" },
    { label: "Shop", labelIndex: 1, linkPathname: "/shop" },
    { label: "Product", labelIndex: 2, linkPathname: "/product" },
    { label: "Contact", labelIndex: 3, linkPathname: "/contact" },
  ];

  const navIconButtons: NavIconButton[] = [
    { label: "Search", iconPath: "/icons/search02.svg" },
    { label: "My account", iconPath: "/icons/user-circle.svg" },
    { label: "Shopping bag", iconPath: "/icons/shoppingBag.svg" },
  ];

  const getActiveLink = (label: string): boolean => {
    const activeLinkIndex = navIconButtons.findIndex((obj: NavIconButton) => obj.label === label);

    return activeLinkIndex === 0 || activeLinkIndex === 1;
  };

  const toggleMobileMenu = (): void => {
    console.log("toggleMobileMenu");
    return setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header className="container mx-auto py-4 sm:px-8">
      <nav className="flex items-center justify-between">
        <div className="flex">
          {!isMobileMenuOpen && (
            <button type="button" className="md:hidden size-6 relative" onClick={toggleMobileMenu}>
              <Image
                src="/icons/menu-line-horizontal.svg"
                alt="Menu"
                layout="fill"
                objectFit="cover"
              />
            </button>
          )}
          <Link
            href="/"
            className="font-poppins text-[1rem] md:text-[1.5rem] font-medium leading-[1.5rem]"
          >
            ShopName
          </Link>
        </div>

        <ul className={` hidden gap-x-10 py-4  md:flex `}>
          {navLabels.map(({ label, labelIndex, linkPathname }: NavLabel) => (
            <li key={labelIndex}>
              <Link
                href="/"
                className={` 
                 ${
                   isActiveLink(linkPathname) && "text-neutral-dark"
                 } hover:text-neutral-dark text-neutral-dark-gray  text-button-xs font-spaceGrotesk`}
              >
                {label}
              </Link>
            </li>
          ))}
        </ul>

        <div className="flex gap-x-4">
          {isMobileMenuOpen ? (
            <button
              type="button"
              className={` size-6 relative `}
              key="Close"
              onClick={toggleMobileMenu}
            >
              <Image src="/icons/close.svg" alt="Close" layout="fill" objectFit="cover" />
            </button>
          ) : (
            navIconButtons.map(({ label, iconPath }: NavIconButton) => (
              <button
                type="button"
                className={`${getActiveLink(label) && "hidden md:block"} size-6 relative `}
                key={label}
              >
                <Image src={iconPath} alt={label} layout="fill" objectFit="cover" />
              </button>
            ))
          )}
        </div>
        {isMobileMenuOpen && MobileMenu({ isMobileMenuOpen, navLabels, isActiveLink })}
      </nav>
    </header>
  );
};

export default Header;
