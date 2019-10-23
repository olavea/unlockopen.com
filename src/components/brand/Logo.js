import React from "react";
import Link from "gatsby-link";
import Wordmark from "./Wordmark";
import Logomark from "./Logomark";
import { rhythm } from "../../utils/typography";
import * as brand from "../../utils/brand";

const Logo = ({ to, style, size, colors }) => {
  const Size = size || 1;
  const Colors = [
    brand.WORDMARK_FONT_COLOR_UNLOCK,
    brand.WORDMARK_FONT_COLOR_OPEN,
  ];

  if (colors) {
    Colors[0] = Colors[0] || Colors[0];
    Colors[1] = Colors[1] || Colors[1];
  } else if (colors) {
    Colors[0] = colors;
    Colors[1] = colors;
  }

  const Style = {
    ...style,
    display: "flex",
  };

  const lm = (
    <Logomark
      size={Size}
      style={{
        marginRight: rhythm(Size / 4),
        paddingBottom: `calc(${rhythm(3 / 10)} - 5px)`,
      }}
    />
  );
  const wm = <Wordmark size={Size} style={{ fontSize: `${Size}rem` }} />;
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
