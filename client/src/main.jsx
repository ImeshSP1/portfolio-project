// This is the FIRST file React runs
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import ThemeProvider from "./context/ThemeContext";
import "./index.css";


// This line attaches React to the HTML <div id="root">
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ThemeProvider>
      <App /> {/* App is our main component */}
    </ThemeProvider>
  </React.StrictMode>
);
