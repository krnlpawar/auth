import React from "react";
import { Link } from "react-router";

export default function Register() {
  return (
    <div className="form-container">
      <form>
        <h2>Register</h2>
        <input type="text" placeholder="Username" required />
        <input type="email" placeholder="Email" required />
        <input type="password" placeholder="Password" required />
        <button>Register</button>
        <p>
          Already have an account? <Link to="/login">Login</Link>
        </p>
      </form>
    </div>
  );
}
