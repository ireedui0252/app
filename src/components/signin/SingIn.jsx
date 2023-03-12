import React, { useState } from "react";
import "./SingIn.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function SingIn() {
  const [usernameReg, setUsernameReg] = useState("");
  const [passwordReg, setPasswordReg] = useState("");
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState(false);

  const history = useNavigate();

  const handleusernameReg = (e) => {
    setUsernameReg(e.target.value);
  };
  const handlepasswordReg = (e) => {
    setPasswordReg(e.target.value);
  };
  const handleemail = (e) => {
    setEmail(e.target.value);
  };

  const handleReg = async () => {
    const res = await axios.post("http://localhost:4005/singup", {
      user_name: usernameReg,
      user_password: passwordReg,
      user_email: email,
    });
    const data = await res.data;

    if (data.type == "success") {
      setStatus("success");
      history("/login");
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
                  type="text"
                  class="login__input"
                  placeholder="User name"
                  onChange={handleusernameReg}
                />
              </div>
              <div class="login__field">
                <input
                  type="text"
                  class="login__input"
                  placeholder="Password"
                  onChange={handlepasswordReg}
                />
              </div>
              <div class="login__field">
                <input
                  type="text"
                  class="login__input"
                  placeholder="Email"
                  onChange={handleemail}
                />
              </div>
              <button class="button login__submit" onClick={handleReg}>
                <span class="button__text">submit now</span>
                <i class="button__icon fas fa-chevron-right"></i>
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

export default SingIn;
