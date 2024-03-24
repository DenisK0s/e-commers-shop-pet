import { SocialMediaLink } from "components/Navigation/Navigation.types";
import Image from "next/image";
import { links } from "./list-config";

const SocialMediaList: React.FC = () => (
  <ul className="flex gap-x-6">
    {links.map(({ iconPath, alt }: SocialMediaLink, index: number) => (
      <li key={index} className="size-6 relative">
        <Image src={iconPath} alt={alt} layout="fill" objectFit="cover" />
      </li>
    ))}
  </ul>
);

export default SocialMediaList;
