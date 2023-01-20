import React from "react"
import "./Qualities.scss"

const Qualities = ({number, headline, text}) => {
  return (
    <div className="qualities">
      <div className="qualities-span">
        <span className="qualities-circle">{number}</span>
      </div>
          <h1 className="qualities-headline">{headline}</h1>
          <p className="qualities-par">{text}</p>
    </div>
  )
};

export default Qualities;
