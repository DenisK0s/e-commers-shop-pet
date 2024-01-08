import { ReactElement } from "react";
import Link from "next/link";
import Image from "next/image";
import { MainNavProps } from "./MobileHeaderNav.types";
import { NavLabel } from "../Header/Header.types";

function MainNav({ navLabels }: MainNavProps): ReactElement {
  return (
    <ul className="pb-4 mb-12">
      {navLabels.map(({ label, labelIndex }: NavLabel) => (
        <li
          key={labelIndex}
          className="flex justify-between w-full py-4 border-b border-solid border-neutral-gray "
        >
          <Link
            href="/"
            className={`text-neutral-dark
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
  );
}

export default MainNav;
