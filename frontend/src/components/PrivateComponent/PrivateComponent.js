import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const PrivateComponent = () => {
  const [error, setError] = useState("");
  const [privateData, setPrivateData] = useState("");
  const Navigate = useNavigate();

  useEffect(() => {
    if (localStorage.getItem("authToken")) {
      Navigate("/");
    }

    const fetchData = async () => {
      const config = {
        header: {
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
        setError("UOu are not authorized please login");
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
      <button onClick={logoutHandler}>Logout</button>
    </>
  );
};

export default PrivateComponent;
