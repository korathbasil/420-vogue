import { FC } from "react";
import { IconProps } from "./types";

export const MinusBox: FC<IconProps> = ({
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
        d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-2 10H7v-2h10v2z"
      ></path>
    </svg>
  </div>
);
