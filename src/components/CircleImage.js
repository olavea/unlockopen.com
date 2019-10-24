import React from "react";
import { rhythm } from "../utils/typography";

const CircleImage = ({ src, alt, size = 1, shadow, style = {} }) => {
  // Hvorfor får jeg lov til å
  // size = 1 og
  // shadow = "inset 0 0 3px #666",
  // style = {},

  const somethingSomethingSize = rhythm(this.props.size || 1);
  const somethingSomethingStyle = this.props.style || {};
  const boxShadow = shadow || "inset 0 0 3px #666";

  return (
    <div
      style={{
        ...somethingSomethingStyle,
        height: somethingSomethingSize,
        width: somethingSomethingSize,
        position: "relative",
      }}
    >
      <img
        className="circle"
        src={src}
        alt={alt}
        style={{
          padding: 0,
          margin: 0,
          width: somethingSomethingSize,
          height: somethingSomethingSize,
          borderRadius: "100%",
        }}
      />
      <div
        style={{
          position: "absolute",
          width: "100%",
          height: "100%",
          MozBoxShadow: boxShadow,
          WebkitBoxShadow: boxShadow,
          boxShadow: boxShadow,
          borderRadius: "100%",
          top: 0,
          left: 0,
        }}
      />
    </div>
  );
};

export default CircleImage;
