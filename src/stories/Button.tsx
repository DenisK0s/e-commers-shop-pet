import React from "react";
import "./button.css";

/* eslint-disable */

interface ButtonProps {
  primary?: boolean;

  backgroundColor?: string;

  size?: "small" | "medium" | "large";

  label: string;

  onClick?: () => void;
}

export function Button({
  primary = false,
  size = "medium",
  backgroundColor,
  label,
  ...props
}: ButtonProps) {
  const mode = primary ? "storybook-button--primary" : "storybook-button--secondary";
  return (
    <button
      type="button"
      className={["storybook-button", `storybook-button--${size}`, mode].join(" ")}
      {...props}
    >
      {label}
      <style jsx>
        {`
          button {
            background-color: ${backgroundColor};
          }
        `}
      </style>
    </button>
  );
}
