import { NavLabel, NavIconButton } from "../Header/Header.types";

export type DesktopHeaderNavProps = {
  navLabels: NavLabel[];
  isMobileMenuOpen: boolean;
  toggleMobileMenu: () => void;
  isActiveLink: (linkPathname: string) => boolean;
  navIconButtons: NavIconButton[];
  getActiveLink: (label: string) => boolean;
};

export type MainNavProps = {
  navLabels: NavLabel[];
  isActiveLink: (linkPathname: string) => boolean;
};
