import React from "react";
import Link from "gatsby-link";
import Wordmark from "./Wordmark";
import Logomark from "./Logomark";
import { rhythm } from "../../utils/typography";
import * as brand from "../../utils/brand";

const Logo = ({ to, style, size, colors, color }) => {
  const appliedSize = size || 1;
  const appliedColors = [
    brand.WORDMARK_FONT_COLOR_UNLOCK,
    brand.WORDMARK_FONT_COLOR_OPEN,
  ];

  if (colors) {
    appliedColors[0] = colors[0] || appliedColors[0];
    appliedColors[1] = colors[1] || appliedColors[1];
  } else if (color) {
    appliedColors[0] = color;
    appliedColors[1] = color;
  }

  const Style = {
    ...style,
    display: "flex",
  };

  const lm = (
    <Logomark
      size={appliedSize}
      style={{
        marginRight: rhythm(appliedSize / 4),
        paddingBottom: `calc(${rhythm(3 / 10)} - 5px)`,
      }}
    />
  );
  const wm = (
    <Wordmark size={appliedSize} style={{ fontSize: `${appliedSize}rem` }} />
  );
  return to ? (
    <Link
      style={{
        textDecoration: "none",
        "&:hover": { background: "transparent" },
        ...Style,
      }}
      to={to}
    >
      {lm} {wm}
    </Link>
  ) : (
    <span style={Style}>
      {lm} {wm}
    </span>
  );
};

export default Logo;
