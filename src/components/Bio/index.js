import React from 'react'
import profilePic from './IMG_3420.jpg'
//import bio from './bio.md'
import { rhythm } from '../../utils/typography'
import { MIN_DEFAULT_MEDIA_QUERY } from 'typography-breakpoint-constants'
import CircleImage from '../CircleImage'


class Bio extends React.Component {
  render() {
      const author = this.props.author;
      
    return (
      <div className="contrast"
        style={{
            "@media (minWidth:980px)": {
                gridTemplateColumns: "4fr 8fr",
                display: "grid",
                gap: rhythm(1),
            }
        }}
      >
        <div style={{
          textAlign: "center",
        }}>
          <CircleImage
            src={profilePic}
            alt={author}
            size={4}
            style={{
                margin: `0 auto ${rhythm(1)} auto`
          }}/>
          <header>
              <h3>Tobie Langel</h3>
              <p>Principal, UnlockOpen</p>
          </header>
        </div>
        <div style={{
              }}>


            <p>Tobie Langel helps organizations understand and leverage open source to recruit, retain, and foster top software engineering talent, and improve their teams' efficiency, culture, and morale.</p>
            <p>His clients include top tech companies like Google, Microsoft, Intel, or Mozilla.</p>
            <p>Previously, he was a member of Facebook's Open Source and Web Standards team, and was Facebook's representative at W3C.</p>
            <p>An avid open source contributor, Tobie Langel is know for having co-maintained the Prototype JavaScript framework and for numerous open source projects. He also edited a number of Web standards, including WebIDL, and led W3C's Web platform testing effort.</p>
            <p style={{
          fontStyle: "normal",
             }}>✉️ <a href="mailto:tobie@unlockopen.com">tobie@unlockopen.com</a></p>
        </div>

    </div>
    )
  }
}

export default Bio
