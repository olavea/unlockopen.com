import React from "react";
import Link from "gatsby-link";
import Wordmark from "./Wordmark";
import Logomark from "./Logomark";
import { rhythm } from "../../utils/typography";
import * as brand from "../../utils/brand";

class Logo extends React.Component {
  render() {
    const to = this.props.to;
    const size = this.props.size || 1;
    const colors = [
      brand.WORDMARK_FONT_COLOR_UNLOCK,
      brand.WORDMARK_FONT_COLOR_OPEN,
    ];
    if (this.props.colors) {
      colors[0] = this.props.colors[0] || colors[0];
      colors[1] = this.props.colors[1] || colors[1];
    } else if (this.props.color) {
      colors[0] = this.props.color;
      colors[1] = this.props.color;
    }

    const style = {
      ...this.props.style,
      display: "flex",
    };

    const lm = (
      <Logomark
        size={size}
        style={{
          marginRight: rhythm(size / 4),
          paddingBottom: `calc(${rhythm(3 / 10)} - 5px)`,
        }}
      />
    );
    const wm = <Wordmark size={size} style={{ fontSize: `${size}rem` }} />;
    return to ? (
      <Link
        style={{
          textDecoration: "none",
          "&:hover": { background: "transparent" },
          ...style,
        }}
        to={to}
      >
        {lm} {wm}
      </Link>
    ) : (
      <span style={style}>
        {lm} {wm}
      </span>
    );
  }
}

export default Logo;

/*"header": {
      display: "grid",
      columnGap: rhythm(1/2),
      gridTemplateColumns: "1fr 8fr",
  //color: "#fff",
},
"header h1": {
  ...scale(0),
  fontWeight: 700,
  //color: "#fff",
  marginRight: rhythm(1),
  marginLeft: rhythm(1),
},
"header h1 a, header h1 a:hover, header h1 a:active, header h1 a:visited": {
  textTransform: "none",
  backgroundColor: "transparent",
},
"header h1 span:first-of-type": {
  fontWeight: 300,
},*/
