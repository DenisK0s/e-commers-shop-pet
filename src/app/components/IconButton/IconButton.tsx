import { ReactElement } from "react";
import Image from "next/image";
import { IconButtonProps } from "./IconButton.types";

function IconButton({ classNames, iconPath, alt, onClick }: IconButtonProps): ReactElement {
  return (
    <button type="button" className={`${classNames} size-6 relative`} onClick={onClick}>
      <Image src={iconPath} alt={alt} layout="fill" objectFit="cover" />
    </button>
  );
}

export default IconButton;
