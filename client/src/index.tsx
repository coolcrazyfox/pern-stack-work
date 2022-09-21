import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import 'overlayscrollbars/css/OverlayScrollbars.min.css';

const root = ReactDOM.createRoot(document.getElementById("root") as Element);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
