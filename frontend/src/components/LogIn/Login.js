import "./LogIn.scss";
import { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [formError, setFormError] = useState("");

  const Navigate = useNavigate();

  useEffect(() => {
    if (!localStorage.getItem("authToken")) {
      Navigate("/");
    }
  }, []);

  const validateFormInput = async (event) => {
    event.preventDefault();

    const config = {
      header: {
        "Content-type": "application/json",
      },
    };

    try {
      const { data } = await axios.post(
        "http://localhost:8080/user/login",
        {
          email,
          password,
        },
        config
      );
      localStorage.setItem("authToken", data.token);

      Navigate("/private");
    } catch (error) {
      setFormError(error.response.data.error);
      setTimeout(() => {
        setFormError("");
      }, 5000);
    }
  };

  return (
    <form className="form-container" onSubmit={validateFormInput}>
      {formError && <span className="error-message">{formError}</span>}
      <input
        value={email}
        placeholder="Email"
        onChange={(e) => setEmail(e.target.value)}
      />

      <input
        value={password}
        type="password"
        placeholder="Password"
        onChange={(e) => setPassword(e.target.value)}
      />
      <input type="submit" value={"LOGIN"} />
    </form>
  );
};
