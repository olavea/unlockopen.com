import React from 'react'

// Import typefaces
import 'typeface-montserrat'
import 'typeface-merriweather'
import get from 'lodash/get'
import PropTypes from 'prop-types';

import profilePic from './profile-pic.jpg'
import { rhythm } from '../utils/typography'

class ArticleTitle extends React.Component {
  render() {
    const author = this.props.author;
      
    return (
      <div
        style={{
          display: 'flex',
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
          Francisco building useful things.{' '}
          <a href="https://twitter.com/kylemathews">
            You should follow him on Twitter
          </a>
        </p>
      </div>
    )
  }
}
Bio.propTypes = {
  author: PropTypes.string.isRequired
};
export default Bio
