import React from "react";
import ReactDOM from "react-dom/client";
import App from "./containers/App";
import reportWebVitals from "./reportWebVitals";
import "./library";
import "./styles/main.css";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

reportWebVitals();
