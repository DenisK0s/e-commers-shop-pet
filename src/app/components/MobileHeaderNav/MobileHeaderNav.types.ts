import { NavLabel } from "../Header/Header.types";

export type MobileHeaderNavProps = {
  isMobileMenuOpen: boolean;
  navLabels: NavLabel[];
  isActiveLink: (linkPathname: string) => boolean;
};

export type SocialMediaLink = {
  iconPath: string;
  alt: string;
};

export type CardWishlistCounterList = {
  iconPath: string;
  alt: string;
  label: string;
  counter: number;
};

export type CardWishlistCounterProps = {
  cartCounter: number;
  wishlistCounter: number;
};

export type MainNavProps = {
  navLabels: NavLabel[];
};
