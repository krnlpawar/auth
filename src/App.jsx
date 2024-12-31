import { BrowserRouter, Route, Routes } from "react-router";
import "./App.css";
import RoutesComponent from "./routes/routes";
import Layout from "./layout/Layout";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Welcome from "./pages/Welcome";
import Protected from "./pages/Protected";
import ProtectedLayout from "./layout/ProtectedLayout";

function App() {
  return (
    <BrowserRouter>
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
    </BrowserRouter>
  );
}

export default App;
