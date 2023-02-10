import {
  FhirDataTypeAdapter,
  intlFhirDataTypeAdapter,
} from "@bonfhir/core/r4b";
import { PropsWithChildren, useMemo } from "react";
import { FhirUIComponentsContext } from "./FhirUIComponentsContext";

export type FhirUIComponentsProviderProps = PropsWithChildren<{
  dataTypeAdapter?: FhirDataTypeAdapter | null | undefined;
}>;

/**
 * Provide a context for ui-components hooks.
 * Should probably be placed near the top of your React app render tree.
 */
export function FhirUIComponentsProvider(props: FhirUIComponentsProviderProps) {
  const dataTypeAdapter = useMemo(() => {
    if (props.dataTypeAdapter) {
      return props.dataTypeAdapter;
    }

    return intlFhirDataTypeAdapter();
  }, [props.dataTypeAdapter]);

  return (
    <FhirUIComponentsContext.Provider
      value={{
        dataTypeAdapter,
      }}
    >
      {props.children}
    </FhirUIComponentsContext.Provider>
  );
}
