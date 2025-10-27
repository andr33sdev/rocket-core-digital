import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import "./index.css"; // <--- asegúrate de esto

createRoot(document.getElementById("root")).render(<App />);
