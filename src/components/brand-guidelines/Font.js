import React from "react";
// import Link from "gatsby-link";
import { rhythm } from "../../utils/typography";

// class Font extends React.Component {
//   render() {
function Font(props) {
  const name = props.name;
  const style = props.style;
  const fontFamily = props.fontFamily;
  const fontColor = props.fontColor;
  const fontWeight = props.fontWeight;
  const CHARACTERS =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz1234567890‘?’“!”(%)[#]{@}/&<-+÷×=>®©$€£¥¢:;,.*)";
  return (
    <div
      style={{
        display: "grid",
        columnGap: rhythm(1 / 2),
        gridTemplateColumns: "25% 75%",
      }}
    >
      <p>
        {name}
        <br />
        <small>
          {fontFamily}
          <br />
          {fontWeight}, {fontColor}
        </small>
      </p>
      <p
        style={{
          ...style,
          fontStyle: fontFamily,
          color: fontColor,
          fontWeight: fontWeight,
        }}
      >
        {CHARACTERS}
      </p>
    </div>
  );
}

export default Font;
