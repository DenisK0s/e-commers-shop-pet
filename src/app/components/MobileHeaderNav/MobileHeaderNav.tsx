"use client";

import { MobileHeaderNavProps } from "./MobileHeaderNav.types";
import SocialMediaNav from "./SocialMediaNav";
import PrimaryButton from "../PrimaryButton";
import CardWishlistCounter from "./CartWishlistCounter";
import SearchInput from "../SearchInput/SearchInput";
import MainNav from "./MainNav";

function MobileHeaderNav({ navLabels }: MobileHeaderNavProps) {
  console.log("hi");
  return (
    <div className="block absolute top-10 pt-4 px-6 w-screen left-0 overflow-hidden bg-white">
      <SearchInput />
      <MainNav navLabels={navLabels} />
      <div className="sticky bottom-0">
        <CardWishlistCounter cartCounter={2} wishlistCounter={2} />
        <PrimaryButton buttonLabel="Sign in" />
        <SocialMediaNav />
      </div>
    </div>
  );
}
export default MobileHeaderNav;
