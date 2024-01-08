import { ReactElement } from "react";
import Link from "next/link";
import { MainNavProps } from "./DesktopHeaderNav.types";
import { NavLabel } from "../Header/Header.types";

function MainNav({ navLabels, isActiveLink }: MainNavProps): ReactElement {
  return (
    <ul className={` hidden gap-x-10 py-4  md:flex `}>
      {navLabels.map(({ label, labelIndex, linkPathname }: NavLabel) => (
        <li key={labelIndex}>
          <Link
            href={linkPathname}
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
  );
}

export default MainNav;
