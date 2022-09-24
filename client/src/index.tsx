import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import 'overlayscrollbars/overlayscrollbars.css'
import {HashRouter} from "react-router-dom";
const root = ReactDOM.createRoot(document.getElementById("root") as Element);
root.render(
  <HashRouter>
    <App />
  </HashRouter>
);
