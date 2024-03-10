import { ReactElement } from "react";
import Image from "next/image";
import {
  CardWishlistCounterList,
  CardWishlistCounterProps,
} from "./MobileHeaderNav.types";

function CardWishlistCounter({
  cartCounter,
  wishlistCounter,
}: CardWishlistCounterProps): ReactElement {
  const listItems: CardWishlistCounterList[] = [
    {
      label: "Cart",
      iconPath: "/icons/shoppingBag.svg",
      alt: "Cart",
      counter: cartCounter,
    },
    {
      label: "Wishlist",
      iconPath: "/icons/shoppingBag.svg",
      alt: "Wishlist",
      counter: wishlistCounter,
    },
  ];

  return (
    <ul>
      {listItems.map(({ label, iconPath, alt, counter }) => (
        <li
          key={label}
          className="flex justify-between py-2 border-b border-solid border-neutral-gray"
        >
          <span>{label}</span>
          <div className="flex items-center">
            <div className="size-6  relative">
              <Image src={iconPath} alt={alt} layout="fill" objectFit="cover" />
            </div>
            <span className="flex size-5 bg-neutral-dark text-white items-center justify-center rounded-full">
              {counter}
            </span>
          </div>
        </li>
      ))}
    </ul>
  );
}

export default CardWishlistCounter;
