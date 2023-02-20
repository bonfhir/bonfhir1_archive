import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { App } from "./App";

const container = document.getElementById("app");
if (!container) {
  throw new Error(
    `Cannot mount React application: Missing #container element!`
  );
}
createRoot(container).render(
  <StrictMode>
    <App />
  </StrictMode>
);
