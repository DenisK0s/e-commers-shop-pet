import Image from "next/image";
import { cn } from "lib/utilinies/helpers";

type IconButtonProps = {
  classNames?: string;
  iconPath: string;
  alt: string;
  onClick?: () => void;
};

const IconButton: React.FC<IconButtonProps> = ({
  classNames,
  iconPath,
  alt,
  onClick,
}) => {
  return (
    <button
      type="button"
      className={cn("size-6 relative", classNames)}
      onClick={onClick}
    >
      <Image src={iconPath} alt={alt} layout="fill" objectFit="cover" />
    </button>
  );
};

export default IconButton;
