import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import "../styles/login.css";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);

  const navigate = useNavigate();

  const navigateToHomepage = () => {
    navigate("/");
  };

  const handleChangeEmail = (event) => {
    setEmail(event.target.value);
  };
  const handleChangePassword = (event) => {
    setPassword(event.target.value);
  };

  const sendCredentials = (event) => {
    event.preventDefault();
    axios
      .post(
        `${import.meta.env.VITE_BACKEND_URL}/login`,
        {
          email,
          password,
        },
        {
          withCredentials: true,
        }
      )

      .then((response) => {
        console.info(response);
        setError(false);
        navigateToHomepage();
      })
      .catch((err) => {
        console.error(err);
        setError(true);
      });
  };

  return (
    <div className="login">
      <div className="card">
        <div className="left">
          <h1>Hello World</h1>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Rem,
            facilis dicta aliquid repellendus a numquam, sint nemo provident
            voluptatem veritatis saepe amet rerum, consectetur unde? Illo sed
            suscipit quam porro.
          </p>
          <span>Dont you have a account ?</span>
          <Link to="/register">
            <button className="btn-connecter" type="submit">
              Register
            </button>
          </Link>
        </div>
        <div className="right">
          <h1>Login</h1>
          <form className="register_form" onSubmit={sendCredentials}>
            <input
              type="text"
              onChange={handleChangeEmail}
              placeholder="Email"
            />
            <input
              type="password"
              onChange={handleChangePassword}
              placeholder="Password"
            />
            <button className="btn-connecter" type="submit">
              Login
            </button>
          </form>
          {error ? "Email ou password incorrects" : ""}
        </div>
      </div>
    </div>
  );
}
