import axios from "axios";
import { useNavigate } from "react-router-dom";
import React, { useState } from "react";
import "./Login.css";

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const history = useNavigate();

  const [status, setStatus] = useState(false);
  const handleUsername = (e) => {
    setUsername(e.target.value);
  };
  const handlePassword = (e) => {
    setPassword(e.target.value);
  };

  const handleLogin = async () => {
    const res = await axios.post("http://localhost:4005/login", {
      username,
      password,
    });

    const data = await res.data;

    if (data.type == "success") {
      setStatus("success");
      history("/");
    } else {
      setStatus("Failed");
    }
  };

  return (
    <div className="body">
      <div class="container">
        <div class="screen">
          <div class="screen__content">
            <form class="login">
              <div class="login__field">
                <input
                  onChange={handleUsername}
                  type="text"
                  class="login__input"
                  placeholder="User name"
                />
              </div>
              <div class="login__field">
                <input
                  onChange={handlePassword}
                  type="password"
                  class="login__input"
                  placeholder="Password"
                />
              </div>
              <button class="button login__submit" onClick={handleLogin}>
                <span class="button__text">Log In Now</span>
              </button>
              <h2>Status: {!status ? "Failed" : "Success"}</h2>
            </form>
          </div>
          <div class="screen__background">
            <span class="screen__background__shape screen__background__shape4"></span>
            <span class="screen__background__shape screen__background__shape3"></span>
            <span class="screen__background__shape screen__background__shape2"></span>
            <span class="screen__background__shape screen__background__shape1"></span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
