import React from "react";
import { Link } from "react-router";

export default function Welcome() {
  return (
    <div className="welcome-container">
      <h1>Welcome!</h1>
      <div className="button-container">
        <Link className="login-button" to={"/login"}>
          Login
        </Link>
        <Link className="register-button" to={"/register"}>
          Register
        </Link>
      </div>
    </div>
  );
}
