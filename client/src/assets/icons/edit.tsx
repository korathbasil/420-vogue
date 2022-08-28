import { FC } from "react";
import { IconProps } from "./types";

export const Edit: FC<IconProps> = ({
  size = "30px",
  fill = "var(--clr-primary)",
  bg,
  onClickAction,
}) => (
  <div
    style={{ width: size, height: size, backgroundColor: bg }}
    onClick={onClickAction}
  >
    <svg viewBox="0 0 24 24">
      <path
        fill={fill}
        d="M3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25zM20.71 7.04c.39-.39.39-1.02 0-1.41l-2.34-2.34a.9959.9959 0 0 0-1.41 0l-1.83 1.83 3.75 3.75 1.83-1.83z"
      ></path>
    </svg>
  </div>
);
