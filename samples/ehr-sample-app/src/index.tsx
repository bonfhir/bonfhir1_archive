import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { App } from "./App";

export function mount(id: string) {
  const element = document.getElementById(id);
  if (!element) {
    throw new Error(`Cannot mount React application: Missing #${id} element!`);
  }

  createRoot(element).render(
    <StrictMode>
      <App />
    </StrictMode>
  );
}
