import React from "react";
import { Route, Routes } from "react-router";
import Layout from "../layout/Layout";
import ProtectedLayout from "../layout/ProtectedLayout";
import Welcome from "../pages/Welcome";
import Login from "../pages/Login";
import Register from "../pages/Register";
import Protected from "../pages/Protected";

export default function RoutesComponent() {
  return (
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" index element={<Welcome />} />
          <Route path="login" element={<Login />} />
          <Route path="register" element={<Register />} />
        </Route>

        <Route element={<ProtectedLayout />}>
          <Route path="/protected" element={<Protected />} />
        </Route>

        <Route path="*" element={<h1>404 page not found</h1>} />
      </Routes> 
  );
}
