import React from "react";
import { rhythm } from "../../utils/typography";

const Font = ({ name, style, fontFamily, fontColor, fontWeight }) => {
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
};

export default Font;
