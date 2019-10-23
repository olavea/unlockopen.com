import React from "react";
import Logo from "./brand/Logo";
import { rhythm } from "../utils/typography";

const Header = () => {
  return (
    <header>
      <h1 style={{ paddingTop: rhythm(1), textAlign: "center" }}>
        <Logo size={1} to={"/"} />
      </h1>
    </header>
  );
};

export default Header;
