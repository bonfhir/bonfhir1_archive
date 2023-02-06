import { PropsWithChildren } from "react";
import {
  FhirUIComponentsContext,
  FhirUIComponentsFormatter,
} from "./FhirUIComponentsContext";

export type FhirUIComponentsProviderProps = PropsWithChildren<{
  formatter: FhirUIComponentsFormatter;
}>;

/**
 * Provide a context for ui-components hooks.
 * Should probably be placed near the top of your React app render tree.
 */
export function FhirUIComponentsProvider({
  formatter,
  children,
}: FhirUIComponentsProviderProps) {
  return (
    <FhirUIComponentsContext.Provider
      value={{
        formatter,
      }}
    >
      {children}
    </FhirUIComponentsContext.Provider>
  );
}
