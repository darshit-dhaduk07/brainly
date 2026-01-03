import type { ReactElement } from "react";

export interface ButtonProps {
  varient: "primary" | "secondary";
  size: "sm" | "md" | "lg";
  text: string;
  startIcon?: ReactElement;
  endIcon?: ReactElement;
  onClick?: () => void;
}

const varientStyles = {
  primary: "bg-primary text-btntext",
  secondary: "bg-secondary text-white",
};

const sizeVarients = {
  sm: "py-1 px-3",
  md: "py-2 px-5",
  lg: "py-3 px-8",
};

const defaultStyles = "rounded-md flex items-center gap-2";

export const Button = (props: ButtonProps) => {
  return (
    <button
      onClick={props.onClick}
      className={`${varientStyles[props.varient]} ${defaultStyles} ${sizeVarients[props.size]} cursor-pointer`}
    >
      {props.startIcon}
      {props.text}
      {props.endIcon}
    </button>
  );
};
