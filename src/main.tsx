import React from "react";
import ReactDOM from "react-dom/client";
import Portfolio from "./app/page";
import "./styles/globals.css"

// import "./index.css"; // or your global CSS file

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Portfolio />
  </React.StrictMode>
);