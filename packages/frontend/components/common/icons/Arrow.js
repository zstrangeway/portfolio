import * as React from "react";

function SvgArrow(props) {
  return (
    <svg viewBox="0 0 28 18" {...props}>
      <defs>
        <clipPath id="arrow_svg__b">
          <use href="#arrow_svg__a" />
        </clipPath>
        <path id="arrow_svg__a" d="M0 0v17.173l27.288-8.586L0 0z" />
      </defs>
      <path d="M0 0v17.173l27.288-8.586L0 0z" clipPath="url(#arrow_svg__b)" />
    </svg>
  );
}

export default SvgArrow;
