import React, { useState } from "react";
import "./Form.scss";
import { SignUp } from "../SignUp/SignUp";
import { Login } from "../LogIn/Login";

const Form = () => {
  const [open, setOpen] = useState(false);

  const handleClick = () => {
    setOpen(!open);
  };

  return (
    <div className="main-div">
      <div className="left-div">
        <div>
          <img
            src="https://globaljournalnu.com/wp-content/uploads/2017/03/img_4070-jpg.jpeg"
            className="main-image"
            alt="image"
          />
        </div>
        <div className="image-text">
          <h1>Altitude Air</h1>
          <p>
            <small>
              We promise to ensure that your well-being is taken care of while
              travelling with us. Boasting top in class fleet inventory and a 5
              star approval for our in-flight experience, you know you're
              getting the best from Altitude with no attitude.
            </small>
          </p>
        </div>
      </div>
      <div className="right-div">
        <div className="btn-div" onClick={handleClick}>
          <button className="switchBtn">{!open ? "Sign In" : "Sign Up"}</button>
        </div>
        <div>{!open ? <SignUp /> : <Login />}</div>
      </div>
    </div>
  );
};

export default Form;
