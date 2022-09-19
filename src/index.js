import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import FormURL from "./components/FormURL.jsx";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <FormURL />
  </React.StrictMode>
);
