import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const PrivateComponent = () => {
  const [error, setError] = useState("");
  const [privateData, setPrivateData] = useState("");
  const Navigate = useNavigate();

  useEffect(() => {
    if (localStorage.getItem("authToken")) {
      Navigate("/private");
    }
    const fetchData = async () => {
      const config = {
        headers: {
          "content-Type": "application/json",
          Authorization: `loki ${localStorage.getItem("authToken")}`,
        },
      };

      try {
        const { data } = await axios.get(
          "http://localhost:8080/private",
          config
        );
        setPrivateData(data.data);
      } catch (error) {
        localStorage.removeItem("authToken");
        setError("You are not authorized please login");
        console.log(error);
      }
    };
    fetchData();
  }, []);

  const logoutHandler = () => {
    localStorage.removeItem("authToken");
    Navigate("/");
  };

  return error ? (
    <span className="error-message">{error}</span>
  ) : (
    <>
      <div>{privateData}</div>
      <button className="btn-secondary" onClick={logoutHandler}>
        Logout
      </button>
    </>
  );
};

export default PrivateComponent;
