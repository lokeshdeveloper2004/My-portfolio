import React from "react";
import ReactDOM from "react-dom/client";

import { ThemeProvider } from "./context/Theme/ThemeContext";
import "./index.css"; // tailwind
import Port from "./Port";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ThemeProvider>
      <Port />
    </ThemeProvider>
  </React.StrictMode>
);