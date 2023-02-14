import type { GlobalProvider } from "@ladle/react";
import { FhirUIComponentsProvider } from "../r4b/FhirUIComponentsProvider";

// TODO Configure future FhirComponentProvider
export const Provider: GlobalProvider = ({ children }) => (
  <FhirUIComponentsProvider>{children}</FhirUIComponentsProvider>
);
