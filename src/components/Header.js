import React from "react";
//import profilePic from './profile-pic.jpg'
// import Link from "gatsby-link"
import Logo from "./brand/Logo";
import { rhythm } from "../utils/typography";

class Header extends React.Component {
  render() {
    return (
      <header>
        <h1 style={{ paddingTop: rhythm(1), textAlign: "center" }}>
          <Logo size={1} to={"/"} />
        </h1>
      </header>
    );
  }
}

export default Header;

/*
        <header style={{
            "minHeight": "200px",
                position: "relative",
            zIndex: 2,
                marginBottom: 0,
                     backgroundColor: "#005f9e",
            backgroundImage: 'url("https://www.transparenttextures.com/patterns/diagmonds-light.png")'

        }}>
            <h1 style={{ paddingTop: rhythm(1), textAlign: "center" }}>
                <Link
                    style={{
                        textTransform: "uppercase",
                      boxShadow: 'none',
                      textDecoration: 'none',
                      color: 'inherit',
                    }}
                    to={'/'}
                ><span>Unlock</span><span style={{
                    }}>Open</span></Link>
            </h1>

            <svg style={{
                position: "absolute",
                bottom: 0,
                width: "100%",
                height: "10vw",
            }} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" preserveAspectRatio="none">
                <polygon fill="white" points="100,100 100,0 0,100"/>
            </svg>
        </header>
*/
