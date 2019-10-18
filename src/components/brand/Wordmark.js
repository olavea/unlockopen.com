import React from "react";
import Link from "gatsby-link";
import { rhythm, scale } from "../../utils/typography";
import * as brand from "../../utils/brand";

class Wordmark extends React.Component {
  render() {
    const size = this.props.size || 1;
    const to = this.props.to;
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
      ...scale(size - 1),
      lineHeight: rhythm(size),
      ...this.props.style,
      fontFamily: brand.WORDMARK_FONT_FAMILY,
      textDecoration: "none",
    };

    const name = [
      <span
        style={{
          color: colors[0],
          fontWeight: brand.WORDMARK_FONT_WEIGHT_UNLOCK,
          textTransform: "uppercase",
        }}
      >
        Unlock
      </span>,
      <span
        style={{
          color: colors[1],
          fontWeight: brand.WORDMARK_FONT_WEIGHT_OPEN,
          textTransform: "uppercase",
        }}
      >
        Open
      </span>,
    ];
    return to ? (
      <Link
        style={{
          textDecoration: "none",
          "&:hover": { background: "transparent" },
          style,
        }}
        to={to}
      >
        {name}
      </Link>
    ) : (
      <span style={style}>{name}</span>
    );
  }
}

export default Wordmark;

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
