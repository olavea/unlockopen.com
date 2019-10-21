import React from "react";
import { rhythm } from "../utils/typography";

// class CircleImage extends React.Component {
//   render() {
function CircleImage(props) {
  const src = props.src;
  const alt = props.alt;
  const size = rhythm(props.size || 1);
  const style = props.style || {};
  const boxShadow = props.shadow || "inset 0 0 3px #666";
  return (
    <div
      style={{
        ...style,
        height: size,
        width: size,
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
          width: size,
          height: size,
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
}

export default CircleImage;
