import React from "react"
import PartGetIt from "../part-get-it/PartGetIt";
import Qualities from "../qualities/Qualities";
import "./PartDescription.scss"

const PartDescription = (props) => {
  return (
    <div className="part-description">
      <div className="part-element">
      <Qualities 
            number="1"
            headline="Simple"
            text="Lorem ipsum dolor
            sit amet, consectetur
            adipiscing elit, sed do
            eiusmod tempor"
        />
        <hr className="part-hr"/>
      </div>
        <div className="part-element">
          <Qualities 
            number="2"
            headline="Useful"
            text="Lorem ipsum dolor
            sit amet, consectetur
            adipiscing elit, sed do
            eiusmod tempor"
        />
        <hr className="part-hr"/>
        </div>
        <div className="part-element">
          <Qualities 
              number="3"
              headline="High Quality"
              text="Lorem ipsum dolor
              sit amet, consectetur
              adipiscing elit, sed do
              eiusmod tempor"
          />
        <hr className="part-hr"/>
        </div>
        <div className="part-element">
          <PartGetIt 
            number="4"
            headline="Free"
            text="Get it for free"
            linkText="Get It>"
          />
        </div>
    </div>
  ) 
};

export default PartDescription;
