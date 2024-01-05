export type PrimaryButtonProps = {
  buttonLabel: string;
};

export type IconButtonProps = {
  classNames?: string;
  iconPath: string;
  alt: string;
  onClick?: (() => void) | undefined;
};
