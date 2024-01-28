import Link from "next/link";
import { MainNavProps } from "./DesktopHeaderNav.types";
import { NavLabel } from "../Header/Header.types";
import { cn } from "../../lib/utilinies/helpers";

const MainNav: React.FC<MainNavProps> = ({ navLabels, isActiveLink }) => {
  return (
    <ul className={` hidden gap-x-10 py-4  md:flex `}>
      {navLabels.map(({ label, labelIndex, linkPathname }: NavLabel) => (
        <li key={labelIndex}>
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
        </li>
      ))}
    </ul>
  );
};

export default MainNav;
