import React from "react"
import "../Form/Form.scss"

const Form = (props) => {
  return (
    <div className="form">  
        <form className="form-tag">
            <h1 className="form-headline">Receive notifications</h1>    
              <input className="form-input" type="text" placeholder="Name"/>
              <input className="form-input" type="text" placeholder="Surname"/>
              <input className="form-input" type="text" placeholder="E-mail"/>
        </form>
        <div className="form-link">
          <a href="https://ru.reactjs.org/" className="form-a"> Send </a>
        </div>
    </div>
  )
};

export default Form;
