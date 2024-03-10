import { NavLabel, NavIconButton } from "./Navigation.types";

// NOTE
const navLabels: NavLabel[] = [
  { label: "Home", labelIndex: 0, linkPathname: "/" },
  { label: "Shop", labelIndex: 1, linkPathname: "/shop" },
  { label: "Product", labelIndex: 2, linkPathname: "/product" },
  { label: "Contact", labelIndex: 3, linkPathname: "/contact" },
];

// NOTE
const navIconButtons: NavIconButton[] = [
  { label: "Search", iconPath: "/icons/search02.svg" },
  { label: "My account", iconPath: "/icons/user-circle.svg" },
  { label: "Shopping bag", iconPath: "/icons/shoppingBag.svg" },
];
