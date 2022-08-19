import { FC } from "react";
import { IconProps } from "./types";

export const Menu: FC<IconProps> = ({
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
        d="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z"
      ></path>
    </svg>
  </div>
);
