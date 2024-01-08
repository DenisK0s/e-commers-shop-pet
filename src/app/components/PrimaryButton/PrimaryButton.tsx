import React, { ReactElement } from "react";
import { PrimaryButtonProps } from "./PrimaryButton.types";

function PrimaryButton({ buttonLabel }: PrimaryButtonProps): ReactElement {
  return (
    <button
      type="button"
      className="p-button-primary my-4 w-full text-white bg-neutral-dark rounded-md"
    >
      {buttonLabel}
    </button>
  );
}

export default PrimaryButton;
