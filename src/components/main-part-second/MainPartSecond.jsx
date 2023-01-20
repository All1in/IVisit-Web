import React from "react"
import Form from "./Form/Form";
import Phone3d from "./main-part-second-svg/Phone3d";
import "../main-part-second/MainPartSecond.scss"

const MainPartSecond = (props) => {
  return (
    <div className="main-part-second">
      <div className="main-part-left">
        <h1 className="main-part-install">Instal in Play Market</h1>
          <Phone3d/>
      </div>
      <div className="main-part-right">
        <Form/>
      </div>
    </div>  
  )
};

export default MainPartSecond;
