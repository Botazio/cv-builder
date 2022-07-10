import { MouseEventHandler } from "react";

export interface ButtonInterface {
  value: string;
  type?: "primary" | "secondary";
  startIcon?: React.ReactNode;
  endIcon?: React.ReactNode;
  isActive?: boolean;
  handleClick?: MouseEventHandler<HTMLButtonElement>;
}