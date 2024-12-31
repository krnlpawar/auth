import React from "react";
import { Route, Routes } from "react-router";
import Layout from "../layout/Layout";
import ProtectedLayout from "../layout/ProtectedLayout";

export default function RoutesComponent() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Welcome />} />
        <Route path="login" element={<Login />} />
        <Route path="register" element={<Register />} />
      </Route>

      <Route element={<ProtectedLayout />}>
        <Route path="/protected" element={<Protected />} />
      </Route>
    </Routes>
  );
}
