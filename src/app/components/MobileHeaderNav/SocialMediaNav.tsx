import { ReactElement } from "react";
import Image from "next/image";
import { SocialMediaLink } from "./MobileHeaderNav.types";

function SocialMediaNav(): ReactElement {
  const links: SocialMediaLink[] = [
    {
      alt: "Instagram",
      iconPath: "/icons/instagram.svg",
    },
    {
      alt: "Facebook",
      iconPath: "/icons/facebook.svg",
    },
    {
      alt: "Youtube",
      iconPath: "/icons/youtube.svg",
    },
  ];

  return (
    <ul className="flex gap-x-6">
      {links.map(({ iconPath, alt }: SocialMediaLink) => (
        <li className="size-6 relative">
          <Image src={iconPath} alt={alt} layout="fill" objectFit="cover" />
        </li>
      ))}
    </ul>
  );
}

export default SocialMediaNav;
