import * as React from "react";

function SvgLinkedin(props) {
  return (
    <svg
      width={32}
      height={32}
      viewBox="0 0 64 64"
      fillRule="evenodd"
      clipRule="evenodd"
      strokeLinejoin="round"
      strokeMiterlimit={2}
      {...props}
    >
      <path d="M32 0c17.661 0 32 14.339 32 32S49.661 64 32 64 0 49.661 0 32 14.339 0 32 0zM12.4 25v26.7h8.3V25h-8.3zm13.4 0h8v3.6h.1c1.1-2.1 3.8-4.3 7.8-4.3 8.4 0 10 5.5 10 12.7v14.6h-8.3v-13c0-3.1-.1-7.1-4.3-7.1-4.3 0-4.9 3.4-4.9 6.9v13.2h-8.3L25.8 25zm-9.3-13.2c2.6 0 4.8 2.1 4.8 4.8 0 2.6-2.1 4.8-4.8 4.8-2.7 0-4.8-2.1-4.8-4.8 0-2.7 2.1-4.8 4.8-4.8z" />
    </svg>
  );
}

export default SvgLinkedin;
