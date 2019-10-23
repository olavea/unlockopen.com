import React from "react";
import { rhythm } from "../utils/typography";

const CircleImage = ({
  src,
  alt,
  size = 1,
  shadow = "inset 0 0 3px #666",
  style = {},
}) => {
  const dimension = rhythm(size);

  return (
    <div
      style={{
        ...style,
        height: dimension,
        width: dimension,
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
          width: dimension,
          height: dimension,
          borderRadius: "100%",
        }}
      />
      <div
        style={{
          position: "absolute",
          width: "100%",
          height: "100%",
          MozBoxShadow: shadow,
          WebkitBoxShadow: shadow,
          boxShadow: shadow,
          borderRadius: "100%",
          top: 0,
          left: 0,
        }}
      />
    </div>
  );
};

export default CircleImage;
