import { createContext, useContext } from "react";
import { FhirDate } from "./data-types";

export interface FhirUIComponentsFormatter {
  formatDate: (date: FhirDate) => string;
}

export interface FhirUIComponentsContext {
  formatter: FhirUIComponentsFormatter;
}

/**
 * The context used by fhir-query.
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
