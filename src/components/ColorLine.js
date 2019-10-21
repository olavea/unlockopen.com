// import React from "react";

// const Footer = ({ style, color }) => {
//   return (
//     <footer style={style}>
//       <hr />
//       <p style={{ textAlign: "center" }}>Copyright 2009—2019 UnlockOpen LLC</p>
//     </footer>
//   );
// };

// export default Footer;

import React from "react";

import { COLOR_LOGO } from "../utils/brand";
import { rhythm } from "../utils/typography";
// How do I
// 1 make it a functional compo?
// 2 get the style prop ?
// 3 and color prop in?
//    3.2 Does this mean I successfully got my color prop in?
// 4 write my new if thing?
// 5 write my new "<div style={{" thing?
// What does this component actually do on the web page?
//      Create the logo or something?
const ColorLine = ({ style, color }) => {
  // const color = this.props.color;
  if (color) {
    return (
      <div
        style={{
          ...style,
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
};

export default ColorLine;
