import { FC } from "react";
import { IconProps } from "./types";

export const Bolt: FC<IconProps> = ({
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
        d="M11 21h-1l1-7H7.5c-.58 0-.57-.32-.38-.66.19-.34.05-.08.07-.12C8.48 10.94 10.42 7.54 13 3h1l-1 7h3.5c.49 0 .56.33.47.51l-.07.15C12.96 17.55 11 21 11 21z"
      ></path>
    </svg>
  </div>
);
