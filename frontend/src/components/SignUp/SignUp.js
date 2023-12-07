// import { useForm } from "react-hook-form";
import "./SignUp.scss";
import { useState } from "react";

export const SignUp = () => {
  const formData = {
    firstname: "",
    lastname: "",
    email: "",
    username: "",
    password: "",
    confirmPassword: "",
    button: "GET STARTED",
  };

  const [formInput, setFormInput] = useState(formData);
  const [formError, setFormError] = useState(formData);

  const handleUserInput = (name, value) => {
    setFormInput({
      ...formInput,
      [name]: value,
    });
    console.log(value);
  };

  const validateFormInput = (event) => {
    event.preventDefault();
    let inputError = {
      email: "",
      password: "",
      confirmPassword: "",
    };

    if (!formInput.email && !formInput.password) {
      setFormError({
        ...inputError,
        email: "Enter valid email address",
        password: "Password should not be empty",
      });
      return;
    }

    if (!formInput.email) {
      setFormError({
        ...inputError,
        email: "Enter valid email address",
      });
      return;
    }

    if (formInput.confirmPassword !== formInput.password) {
      setFormError({
        ...inputError,
        confirmPassword: "Password and confirm password should be same",
      });
      return;
    }

    if (!formInput.password) {
      setFormError({
        ...inputError,
        password: "Password should not be empty",
      });
      return;
    }

    setFormError(inputError);
  };

  return (
    <form className="form-container" onSubmit={validateFormInput}>
      <input
        value={formInput.firstname}
        placeholder="First Name"
        onChange={({ target }) => {
          handleUserInput(target.name, target.value);
        }}
        name="firstname"
      />

      <input
        value={formInput.lastname}
        placeholder="Last Name"
        onChange={({ target }) => {
          handleUserInput(target.name, target.value);
        }}
        name="lastname"
      />
      <input
        value={formInput.email}
        placeholder="Email"
        onChange={({ target }) => {
          handleUserInput(target.name, target.value);
        }}
        name="email"
      />
      <p className="error-message">{formError.email}</p>
      <input
        value={formInput.username}
        placeholder="Username"
        onChange={({ target }) => {
          handleUserInput(target.name, target.value);
        }}
        name="username"
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
      <p className="error-message">{formError.password}</p>
      <input
        value={formInput.confirmPassword}
        type="password"
        placeholder="Confirm Password"
        onChange={({ target }) => {
          handleUserInput(target.name, target.value);
        }}
        name="confirmPassword"
      />
      <p className="error-message">{formError.confirmPassword}</p>

      {/* {errors.example && <span>This field is </span>} */}

      <input type="submit" value={formInput.button} />
    </form>
  );
};
