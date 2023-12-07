import axios from "axios";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../styles/register.css";

export default function Register() {
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [checkedPassword, setCheckedPassword] = useState("");
  const [error, setError] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleChangeFirstname = (event) => {
    setFirstname(event.target.value);
  };

  const handleChangeLastname = (event) => {
    setLastname(event.target.value);
  };

  const handleChangeEmail = (event) => {
    setEmail(event.target.value);
  };

  const handleChangePassword = (event) => {
    setPassword(event.target.value);
  };

  const handleChangeCheckedPassword = (event) => {
    setCheckedPassword(event.target.value);
  };

  const sendRegisterData = (event) => {
    event.preventDefault();

    if (password === checkedPassword) {
      axios
        .post(`${import.meta.env.VITE_BACKEND_URL}/user`, {
          firstname,
          lastname,
          email,
          password,
        })
        .then((response) => {
          setSuccess(response.data.message);
          setError(false);
          console.info(response);
        })
        .catch((err) => {
          console.error(err.response.data);

          if (err.response.data) {
            if (
              err.response.data.error === `"email" is not allowed to be empty`
            ) {
              setError("L'email ne peut pas être vide");
            } else if (
              err.response.data.error === `"email" must be a valide email`
            ) {
              setError("Mettre un email valide");
            } else if (
              err.response.data.error ===
              `"password" length must be at least 8 characters long`
            ) {
              setError("Le mot de passe doit faire aumoins 8 chractères");
            } else if (err.response.data.error === 1062) {
              setError("L'émail est déjà enregistré");
            }
          } else {
            console.error(err.response.data.error);
          }
          setSuccess(false);
        });
    } else {
      setError("Les mots de passe ne correspondent pas");
      console.error("Les mots de passe ne correspondent pas");
    }
  };

  return (
    <div className="register">
      <div className="card">
        <div className="left">
          <h1>MON Site</h1>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Rem,
            facilis dicta aliquid repellendus a numquam, sint nemo provident
            voluptatem veritatis saepe amet rerum, consectetur unde? Illo sed
            suscipit quam porro.
          </p>
          <span>Do you have an account?</span>
          <Link to="/login">
            <button className="btn-connecter" type="submit">
              Register
            </button>
          </Link>
        </div>
        <div className="right">
          <h1>Register</h1>
          <form className="register_form" onSubmit={sendRegisterData}>
            <input
              type="text"
              onChange={handleChangeFirstname}
              placeholder="Firstname"
            />
            <input
              type="text"
              onChange={handleChangeLastname}
              placeholder="Lastname"
            />
            <input
              type="email"
              onChange={handleChangeEmail}
              placeholder="Email"
            />
            <input
              type="password"
              onChange={handleChangePassword}
              placeholder="Password"
            />
            <input
              type="password"
              onChange={handleChangeCheckedPassword}
              placeholder="CheckedPassword"
            />
            <button className="btn-connecter" type="submit">
              Register
            </button>
          </form>
          {success ? <p>{success}</p> : ""}
          {error ? <p>{error}</p> : ""}
        </div>
      </div>
    </div>
  );
}
