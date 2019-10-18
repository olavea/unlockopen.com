import React from "react";
import Link from "gatsby-link";
import { COLOR_LOGO } from "../utils/brand";
import { rhythm } from "../utils/typography";

class ColorLine extends React.Component {
  render() {
    const color = this.props.color;
    if (color) {
      return (
        <div
          style={{
            ...this.props.style,
            height: rhythm(22 / 100),
            backgroundColor: color,
          }}
        />
      );
    }
    return (
      <div
        style={{
          ...this.props.style,
          height: rhythm(22 / 100),
          display: "grid",
          gridTemplateColumns: `8fr 5fr 3fr 2fr`, // fib
        }}
      >
        <div style={{ backgroundColor: COLOR_LOGO[0] }} />
        <div style={{ backgroundColor: COLOR_LOGO[1] }} />
        <div style={{ backgroundColor: COLOR_LOGO[2] }} />
        <div style={{ backgroundColor: COLOR_LOGO[3] }} />
      </div>
    );
  }
}

export default ColorLine;
