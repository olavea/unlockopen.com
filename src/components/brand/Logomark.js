import React from "react";
import { rhythm } from "../../utils/typography";
import * as brand from "../../utils/brand";

const Logomark = ({ color, style, size }) => {
  const Size = rhythm(size || 1);
  return (
    <svg
      style={{
        ...style,
        height: Size,
        width: Size,
      }}
      xmlns="http://www.w3.org/2000/svg"
      x="0px"
      y="0px"
      viewBox="78 92 145 115"
    >
      <g>
        <path
          fill={color || brand.COLOR_LOGO[0]}
          d="M130.7,115.8V93.9l-0.3,0c-13.4,1-26,6.8-35.6,16.3s-15.3,22.2-16.3,35.6l0,0.3h21.9l0-0.3c1.9-15.8,14.3-28.1,30-30L130.7,115.8z"
        />
        <path
          fill={color || brand.COLOR_LOGO[1]}
          d="M130.7,206.1v-21.9l-0.3,0c-15.8-1.9-28.1-14.3-30-30l0-0.3H78.5l0,0.3c1,13.4,6.8,26,16.3,35.6c9.5,9.5,22.2,15.3,35.6,16.3L130.7,206.1z"
        />
        <path
          fill={color || brand.COLOR_LOGO[2]}
          d="M190.8,153.9l0,0.3c-1,13.4-6.8,26-16.3,35.6c-9.5,9.5-22.2,15.3-35.6,16.3l-0.3,0v-21.9l0.3,0c15.8-1.9,28.1-14.3,30-30l0-0.3H190.8z"
        />
        <path
          fill={color || brand.COLOR_LOGO[3]}
          d="M221,93.9v21.9l-0.3,0c-15.8,1.9-28.1,14.3-30,30l0,0.3h-21.9l0-0.3c1-13.4,6.8-26,16.3-35.6s22.2-15.3,35.6-16.3L221,93.9z"
        />
      </g>
    </svg>
  );
};

export default Logomark;
