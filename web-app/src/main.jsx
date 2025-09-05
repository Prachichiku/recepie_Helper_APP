import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css"; // Optional for Tailwind or custom CSS
import '../node_modules/bootstrap/dist/css/bootstrap.css';
import '../node_modules/bootstrap-icons/font/bootstrap-icons.json'

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
