import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import LocalizationContextProvider from "./context/LocalizationContext.jsx";
import "./i18n";

ReactDOM.createRoot(document.getElementById("root")).render(
  <LocalizationContextProvider>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </LocalizationContextProvider>
);