import React from "react";
import ReactDOM from "react-dom/client";
import App from "components/App";
import "./index.css";
import { BrowserRouter } from "react-router-dom";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter basename="Task-test">
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
