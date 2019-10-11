import React from 'react'
import {alpha } from '../../utils/brand'
import { rhythm } from '../../utils/typography'
import createColor from 'color'

class Color extends React.Component {
  render() {
    const name = this.props.name;
    const color = this.props.color;
    const size = this.props.size || rhythm(1);
    const scale = this.props.scale == "";
    const styles = (factor) => {
        let c = alpha(color, factor);
        return {
            width: size,
            height: size,
            textAlign: "center",
            backgroundColor: c,
            color: createColor(c).isLight() ? "#000" : "#fff"
        };
    };

    return (
        <div style={{
            display: "grid",
            columnGap: rhythm(1/2),
            gridTemplateColumns: `50% ${size} ${size} ${size} ${size} ${size} ${size} ${size}`,
        }}>
          <p>{name} ({color})</p>
          <div style={{backgroundColor: color, width: size, height: size}}></div>
          {scale ? [
              <div style={styles(0)}><small>1</small></div>,
              <div style={styles(1)}><small>1</small></div>,
              <div style={styles(2)}><small>2</small></div>,
              <div style={styles(3)}><small>3</small></div>,
              <div style={styles(4)}><small>4</small></div>,
              <div style={styles(5)}><small>5</small></div>
          ] : null}
        </div>
    )
  }
}

export default Color

