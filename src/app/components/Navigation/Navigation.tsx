import Link from "next/link";
import Image from "next/image";

import { cn } from "../../lib/utilinies/helpers";
import { navLabels } from "./nav-config";
import { NavigationProps, NavLabel } from "./Navigation.types";

const Navigation: React.FC<NavigationProps> = ({ isActiveLink, isMobile }) => {
  return (
    <ul
      className={`${isMobile ? "pb-4 mb-12" : "hidden gap-x-10 py-4  md:flex"}`}
    >
      {navLabels.map(({ label, labelIndex, linkPathname }: NavLabel) => (
        <li
          key={labelIndex}
          className={
            isMobile
              ? "flex justify-between w-full py-4 border-b border-solid border-neutral-gray "
              : ""
          }
        >
          <Link
            href={linkPathname}
            className={cn(
              "hover:text-neutral-dark text-neutral-dark-gray  text-button-xs font-spaceGrotesk",
              {
                "text-neutral-dark": isActiveLink(linkPathname),
              },
            )}
          >
            {label}
          </Link>
          {isMobile && (labelIndex === 1 || labelIndex === 2) && (
            <div className="size-6  relative">
              <Image
                src="/icons/chevron-down.svg"
                alt="Search"
                layout="fill"
                objectFit="cover"
              />
            </div>
          )}
        </li>
      ))}
    </ul>
  );
};

export default Navigation;
