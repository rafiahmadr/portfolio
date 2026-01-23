import { HashRouter } from "react-router-dom";
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";

// Optional: update document title
document.title = "Rafi Ahmad R | Portfolio";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <HashRouter>
      <App />
    </HashRouter>
  </React.StrictMode>
);
