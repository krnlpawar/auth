import React, { useEffect } from "react";
import { Outlet, useNavigate } from "react-router";
import { useAuth } from "../contexts/authContext";

export default function ProtectedLayout() {
  const auth = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (!auth.user) {
      navigate("/login");
    }
  }, [auth.user, navigate]);

  return (
    <div className="container">
      <Outlet />
    </div>
  );
}
