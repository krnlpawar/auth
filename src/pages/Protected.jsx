import React from "react";
import { useAuth } from "../contexts/authContext";
import { useNavigate } from "react-router";

export default function Protected() {

  const auth = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    auth.logout();
    navigate("/login");
  }
  return (
    <div className="welcome-container">
      <h1>Welcometo proected page!</h1>
      <p>You have successfully logged in.</p>
      <button onClick={() => handleLogout()}>Logout</button>
    </div>
  );
}
