import React from 'react'
import Link from 'gatsby-link'
import { rhythm } from '../../utils/typography'

class Font extends React.Component {
  render() {
    const name = this.props.name;
    const style = this.props.style;
    const fontFamily = this.props.fontFamily;
    const fontColor = this.props.fontColor;
    const fontWeight = this.props.fontWeight;
    const CHARACTERS = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz1234567890‘?’“!”(%)[#]{@}/&\<-+÷×=>®©$€£¥¢:;,.*)"
    return (
        <div style={{
            display: "grid",
            columnGap: rhythm(1/2),
            gridTemplateColumns:  '25% 75%',
        }}>
          <p>{name}<br /><small>{fontFamily}<br />{fontWeight}, {fontColor}</small></p>
          <p style={{
            ...style,
            fontStyle: fontFamily,
            color: fontColor,
            fontWeight: fontWeight
          }}>{CHARACTERS}</p>
          
        </div>

    )
  }
}

export default Font
