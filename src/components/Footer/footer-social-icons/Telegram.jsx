import React from "react";

const Telegram = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      width="18"
      height="18"
      fill="none"
      viewBox="0 0 18 18"
    >
      <path fill="url(#pattern0)" d="M0.442 0.857H17.579V17.994H0.442z"/>
      <path fill="#000" d="M0.442 0.857H17.579V17.994H0.442z"/>
      <defs>
        <pattern
          id="pattern0"
          width="1"
          height="1"
          patternContentUnits="objectBoundingBox"
        >
          <use transform="scale(.00195)" xlinkHref="#image0_202_638"/>
        </pattern>
        <image
    id="image0_202_638"
    width="512"
    height="512"
    xlinkHref="data:image/png;base64,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"
    />
      </defs>
    </svg>
  );
}

export default Telegram;
