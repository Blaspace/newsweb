import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { NewsProvider } from "./context/NewsContext";
import { BrowserRouter } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <NewsProvider>
        <App />
      </NewsProvider>
    </BrowserRouter>
  </React.StrictMode>
);
