export type NavLabel = {
  label: string;
  linkPathname: string;
  labelIndex: number;
};

export type HeaderIconButton = {
  label: string;
  iconPath: string;
};

export type SocialMediaLink = {
  iconPath: string;
  alt: string;
};

export type CardWishlistCounterList = {
  iconPath: string;
  alt: string;
  label: string;
};

export type DesktopHeaderProps = {
  isMobileMenuOpen: boolean;
  toggleMobileMenu: () => void;
  isActiveLink: (linkPathname: string) => boolean;
};

export type NavigationProps = {
  isActiveLink: (linkPathname: string) => boolean;
  isMobile: boolean;
};
