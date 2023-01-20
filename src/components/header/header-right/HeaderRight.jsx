import React from "react"
import IconGoogleTranslater from "../svg-components-icons/IconGoogleTranslater/IconGoogleTranslater";
import Arrow from "../svg-components-icons/Arrow/Arrow";
import GitHub from "../svg-components-icons/GitHub/GitHub";
import "../../header/Header.scss"

const HeaderRight = (props) => {
  return (
      <div className="header-right-side">
            <IconGoogleTranslater/> 
            <Arrow/>
            <GitHub/>
     </div>
  )
};

export default HeaderRight;
