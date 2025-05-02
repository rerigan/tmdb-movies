import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./css/index.css";
import App from "./App.jsx";
import { HashRouter } from "react-router-dom";"react-router-dom";
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <HashRouter  sensitive={false}>
      <App />
    </HashRouter>
  </StrictMode>
);
