import { FhirQueryProvider } from "@bonfhir/fhir-query/r4b";
import type { GlobalProvider } from "@ladle/react";
import { FhirUIComponentsProvider } from "../r4b/FhirUIComponentsProvider";
import { staticFhirClient } from "./client";
import { ladleRenderer } from "./renderer";

// TODO Configure future FhirComponentProvider
export const Provider: GlobalProvider = ({ children }) => (
  <FhirQueryProvider fhirClient={staticFhirClient}>
    <FhirUIComponentsProvider renderer={ladleRenderer}>
      {children}
    </FhirUIComponentsProvider>
  </FhirQueryProvider>
);
