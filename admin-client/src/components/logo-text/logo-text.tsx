import { FC } from "react";

interface LogotextProps {
  fontSize?: string;
  fontWeight?: number;
}

export const LogoText: FC<LogotextProps> = ({
  fontSize = "30px",
  fontWeight = 800,
}) => (
  <h1
    style={{
      color: "var(--col-primary)",
      fontFamily: "'Teko', sans-serif",
      fontSize,
      fontWeight,
    }}
  >
    420VOGUE<span style={{ color: "grey" }}>.</span>
  </h1>
);
