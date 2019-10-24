import React from "react";
import { rhythm } from "../../utils/typography";

const Display = ({ color, children }) => {
  const somethingSomethingColor = color || "inherit";
  const styles = {
    height: "100%",
    width: "100%",
    padding: `${rhythm(1)} 0`,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: somethingSomethingColor,
  };
  return <div style={styles}>{children}</div>;
};

export default Display;
