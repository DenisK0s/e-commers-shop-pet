"use client";

import { TextButton } from "components/shared/Buttons";
import CardWishlistCounter from "../shared/CartWishlistCounter/CartWishlistCounter";
import { NavigationProps } from "components/Navigation/Navigation.types";
import { Navigation } from "components/Navigation";

const MobileHeaderMenu: React.FC<NavigationProps> = ({
  isActiveLink,
  isMobile,
}) => {
  return (
    <div className="block absolute top-12 pt-4 px-6 w-screen left-0 overflow-hidden bg-white">
      <Navigation isActiveLink={isActiveLink} isMobile={isMobile} />
      <div className="sticky bottom-0">
        <CardWishlistCounter />
        <TextButton buttonLabel="Sign in" />
      </div>
    </div>
  );
};
export default MobileHeaderMenu;
