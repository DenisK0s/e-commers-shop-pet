export type NavLabel = {
  label: string;
  linkPathname: string;
  labelIndex: number;
};

export type NavIconButton = {
  label: string;
  iconPath: string;
};

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
  isActiveLink: (linkPathname: string) => boolean;
};

export type DesktopHeaderNavProps = {
  navLabels: NavLabel[];
  isMobileMenuOpen: boolean;
  toggleMobileMenu: () => void;
  isActiveLink: (linkPathname: string) => boolean;
  navIconButtons: NavIconButton[];
  getActiveLink: (label: string) => boolean;
};
