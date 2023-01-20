import React from "react"
import "./PartGetIt.scss"

const PartGetIt = ({number, headline, text, linkText}) => {
  return (
    <div className="part-get-it">
       <div className="part-get-span">
         <span className="part-get-circle">{number}</span>
       </div>
          <h1 className="part-get-headline">{headline}</h1>
          <p className="part-get-par">{text}</p>
          <div className="part-get-a">
            <a className="part-get-link" href="https://github.com/ONIQdevv/iVisit-WEB">{linkText}</a>
          </div>
    </div>
  ) 
};

export default PartGetIt;
