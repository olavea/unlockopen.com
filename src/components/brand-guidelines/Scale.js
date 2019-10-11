import React from 'react'
import Link from 'gatsby-link'
import { rhythm } from '../../utils/typography'

class Scale extends React.Component {
  render() {
    const style = this.props.style;
    const TITLE_TEXT = "The spectacle before us was indeed sublime."
    const TEXT = "Apparently we had reached a great height in the atmosphere, for the sky was a dead black, and the stars had ceased to twinkle. By the same illusion which lifts the horizon of the sea to the level of the spectator on a hillside, the sable cloud beneath was dished out, and the car seemed to float in the middle of an immense dark sphere, whose upper half was strewn with silver. Looking down into the dark gulf below, I could see a ruddy light streaming through a rift in the clouds."
    return (
        <div style={{
            display: "grid",
            columnGap: rhythm(1/2),
            rowGap: rhythm(1),
            gridTemplateColumns:  '25% 75%',
        }}>
          <p>H1</p>
          <h1 style={{ margin: 0 }}>{TITLE_TEXT}</h1>
          <p>H2</p>
          <h2 style={{ margin: 0 }}>{TITLE_TEXT}</h2>
          <p>H3</p>
          <h3 style={{ margin: 0 }}>{TITLE_TEXT}</h3>
          <p>H4</p>
          <h4 style={{ margin: 0 }}>{TITLE_TEXT}</h4>
          <p>H5</p>
          <h5 style={{ margin: 0 }}>{TITLE_TEXT}</h5>
          <p>H6</p>
          <h6 style={{ margin: 0 }}>{TITLE_TEXT}</h6>
          <p>Paragraph</p>
          <p>{TEXT}</p>
          <p>Small</p>
          <p><small>{TEXT}</small></p>
        </div>

    )
  }
}

export default Scale
