import React, { useState } from "react";

export const Login = () => {
  const [formInput, setFormInput] = useState({
    email: "",
    password: "",
  });

  const handleUserInput = (name, value) => {
    setFormInput({
      ...formInput,
      [name]: value,
    });
    console.log(value);
  };

  const validateFormInput = (event) => {
    event.preventDefault();
  };

  return (
    <form className="form-container" onSubmit={validateFormInput}>
      <input
        value={formInput.email}
        placeholder="Email"
        onChange={({ target }) => {
          handleUserInput(target.name, target.value);
        }}
        name="email"
      />
      <input
        value={formInput.password}
        type="password"
        placeholder="Password"
        onChange={({ target }) => {
          handleUserInput(target.name, target.value);
        }}
        name="password"
      />
      <input type="submit" value={"Login"} />
      {/* <p className="error-message">{formError.password}</p> */}
    </form>
  );
};
