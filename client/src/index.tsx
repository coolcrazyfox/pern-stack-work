import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import 'overlayscrollbars/overlayscrollbars.css'
const root = ReactDOM.createRoot(document.getElementById("root") as Element);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
