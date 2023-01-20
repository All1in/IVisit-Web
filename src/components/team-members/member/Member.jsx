import React from "react"
import "./Member.scss"

const Member = ({name, proffesion, description}) => {
  return (
      <div className="team-member-description">
         <h1 className="team-member-personally">{name}</h1>
         <p className="team-member-proffesion">{proffesion}</p>
         <p className="team-member-cv">{description}</p>
      </div>
  )
};

export default Member;
