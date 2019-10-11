import React from 'react'
import { rhythm } from '../../utils/typography'

class Display extends React.Component {
    render() {
        const color = this.props.color || "inherit";
        const children = this.props.children;
        const styles = {
            height: "100%",
            width:  "100%",
            padding: `${rhythm(1)} 0`,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            backgroundColor: color,
        }
        return (
            <div style={styles}>{ children }</div>
        )
  }
}

export default Display