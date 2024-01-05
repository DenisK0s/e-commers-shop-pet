import { ReactElement } from "react";
import Image from "next/image";
import { PrimaryButtonProps, IconButtonProps } from "./Buttons.types";

export function PrimaryButton({ buttonLabel }: PrimaryButtonProps): ReactElement {
  return (
    <button
      type="button"
      className="p-button-primary my-4 w-full text-white bg-neutral-dark rounded-md"
    >
      {buttonLabel}
    </button>
  );
}

export function IconButton({ classNames, iconPath, alt, onClick }: IconButtonProps): ReactElement {
  return (
    <button type="button" className={`${classNames} size-6 relative`} onClick={onClick}>
      <Image src={iconPath} alt={alt} layout="fill" objectFit="cover" />
    </button>
  );
}
