import { BrowserRouter, Route } from "react-router";
import "./App.css";
import Routes from "./routes/routes";

function App() {
  return (
    <BrowserRouter>
      <Routes />
    </BrowserRouter>
  );
}

export default App;
