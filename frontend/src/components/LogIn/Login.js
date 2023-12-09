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
    <div className="signup-form">
      <form className="form-container" onSubmit={validateFormInput}>
        <div className="heading">
          <h2>Explore & Experience</h2>
          <small>
            Get onto your most comfortable journey yet. All the way up.
          </small>
        </div>
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
        <input className="btn-primary" type="submit" value={"LOGIN"} />
      </form>
    </div>
  );
};
