import { NavLabel, HeaderIconButton } from "./Navigation.types";

export const navLabels: NavLabel[] = [
  { label: "Home", labelIndex: 0, linkPathname: "/" },
  { label: "Shop", labelIndex: 1, linkPathname: "/shop" },
  { label: "Product", labelIndex: 2, linkPathname: "/product" },
  { label: "Contact", labelIndex: 3, linkPathname: "/contact" },
];

export const headerIconButtons: HeaderIconButton[] = [
  { label: "Search", iconPath: "/icons/search02.svg" },
  { label: "My account", iconPath: "/icons/user-circle.svg" },
  { label: "Shopping bag", iconPath: "/icons/shoppingBag.svg" },
];
