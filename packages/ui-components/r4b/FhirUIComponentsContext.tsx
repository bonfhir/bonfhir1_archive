import { FhirDataTypeAdapter } from "@bonfhir/core/r4b";
import { createContext, useContext } from "react";
import { FhirUIComponentsRenderer } from "./FhirUIComponentsRenderer";

export interface FhirUIComponentsContext {
  dataTypeAdapter: FhirDataTypeAdapter;
  renderer: FhirUIComponentsRenderer;
}

/**
 * The context used by FHIR UI Components.
 */
export const FhirUIComponentsContext = createContext<
  FhirUIComponentsContext | undefined
>(undefined);

/**
 * Get the current {@link FhirUIComponentsContext}.
 *
 * @throws Error if no parent context exists (a.k.a. no `FhirUIComponentsProvider` was used in the parent tree).
 */
export const useFhirUIComponentsContext = (): FhirUIComponentsContext => {
  const context = useContext(FhirUIComponentsContext);
  if (!context) {
    throw new Error(
      "Missing FhirUIComponentsContext. Did you forget to use a parent FhirUIComponentsProvider?"
    );
  }

  return context;
};
