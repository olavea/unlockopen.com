import React from "react";
import { alpha } from "../../utils/brand";
import { rhythm } from "../../utils/typography";
import createColor from "color";

const Color = ({ name, colors, size, scale }) => {
  const somethingSomethingSize = size || rhythm(1);
  const Scale = scale === "";

  const styles = factor => {
    let c = alpha(colors, factor);
    return {
      width: somethingSomethingSize,
      height: somethingSomethingSize,
      textAlign: "center",
      backgroundColor: c,
      color: createColor(c).isLight() ? "#000" : "#fff",
    };
  };

  return (
    <div
      style={{
        display: "grid",
        columnGap: rhythm(1 / 2),
        gridTemplateColumns: `50% ${somethingSomethingSize} ${somethingSomethingSize} ${somethingSomethingSize} ${somethingSomethingSize} ${somethingSomethingSize} ${somethingSomethingSize} ${somethingSomethingSize}`,
      }}
    >
      <p>
        {name} ({colors})
      </p>
      <div
        style={{
          backgroundColor: colors,
          width: somethingSomethingSize,
          height: somethingSomethingSize,
        }}
      ></div>
      {Scale
        ? [
            <div style={styles(0)}>
              <small>1</small>
            </div>,
            <div style={styles(1)}>
              <small>1</small>
            </div>,
            <div style={styles(2)}>
              <small>2</small>
            </div>,
            <div style={styles(3)}>
              <small>3</small>
            </div>,
            <div style={styles(4)}>
              <small>4</small>
            </div>,
            <div style={styles(5)}>
              <small>5</small>
            </div>,
          ]
        : null}
    </div>
  );
};

export default Color;
