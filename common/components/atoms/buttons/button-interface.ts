import { MouseEventHandler } from "react";

export interface ButtonInterface {
  value: string;
  type?: string;
  startIcon?: React.ReactNode;
  endIcon?: React.ReactNode;
  isActive?: boolean;
  handleClick?: MouseEventHandler<HTMLButtonElement>;
}