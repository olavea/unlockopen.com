import React from "react";
import Link from "gatsby-link";
import { rhythm } from "../utils/typography";

class Footer extends React.Component {
  render() {
    const style = this.props.style;
    return (
      <footer style={style}>
        <hr />
        <p style={{ textAlign: "center" }}>
          Copyright 2009—2019 UnlockOpen LLC
        </p>
      </footer>
    );
  }
}

export default Footer;
