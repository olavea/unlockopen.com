import React from "react";
import "typeface-montserrat";
import "typeface-merriweather";
import PropTypes from "prop-types";
import profilePic from "./profile-pic.jpg";
import { rhythm } from "../utils/typography";
// this components is not used anywhere then? Or else "kylemathews"
// class ArticleTitle extends React.Component {
//   render() {
function ArticleTitle(props) {
  const author = props.author;

  return (
    <div
      style={{
        display: "flex",
        marginBottom: rhythm(2.5),
      }}
    >
      <img
        src={profilePic}
        alt={author}
        style={{
          marginRight: rhythm(1 / 2),
          marginBottom: 0,
          width: rhythm(2),
          height: rhythm(2),
        }}
      />
      <p>
        Written by <strong>{author}</strong> who lives and works in San
        Francisco building useful things.{" "}
        <a href="https://twitter.com/kylemathews">
          You should follow him on Twitter
        </a>
      </p>
    </div>
  );
}
Bio.propTypes = {
  author: PropTypes.string.isRequired,
};
export default Bio;
