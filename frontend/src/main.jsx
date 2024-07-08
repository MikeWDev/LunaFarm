import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import FarmContextProvider from "./context/ModulesContext.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <FarmContextProvider>
      <App />
    </FarmContextProvider>
  </React.StrictMode>
);
