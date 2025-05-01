import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./css/index.css";
import App from "./App.jsx";
import { HashRouter as Router, Routes, Route, Link, BrowserRouter } from "react-router-dom";
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter basename="/tmdb-movies" sensitive={false}>
      <App />
    </BrowserRouter>
  </StrictMode>
);
