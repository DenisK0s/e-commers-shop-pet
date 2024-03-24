import Image from "next/image";
import { CardWishlistCounterList } from "components/Navigation/Navigation.types";
import { listItems } from "./cart-config";

const CardWishlistCounter: React.FC = () => {
  return (
    <ul>
      {listItems.map(({ label, iconPath, alt }: CardWishlistCounterList) => (
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
              {2}
            </span>
          </div>
        </li>
      ))}
    </ul>
  );
};

export default CardWishlistCounter;
