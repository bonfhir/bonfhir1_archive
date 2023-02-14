import { FhirDataTypeAdapter } from "@bonfhir/core/r4b";
import { ReactElement } from "react";
import { useFhirUIComponentsContext } from "../FhirUIComponentsContext";

export interface FhirValuePropsAdapter<
  TAdapterName extends keyof Omit<FhirDataTypeAdapter, "locale" | "message">
> {
  type: TAdapterName;
  value:
    | Parameters<FhirDataTypeAdapter[TAdapterName]["format"]>[0]
    | null
    | undefined;
  options?:
    | Parameters<FhirDataTypeAdapter[TAdapterName]["format"]>[1]
    | null
    | undefined;
}

export type FhirValueProps =
  | FhirValuePropsAdapter<"date">
  | FhirValuePropsAdapter<"decimal">
  | FhirValuePropsAdapter<"integer">;

export function FhirValue(props: FhirValueProps): ReactElement | null {
  const uiContext = useFhirUIComponentsContext();

  return (
    <>
      {uiContext.dataTypeAdapter[props.type].format(
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        props.value as any,
        props.options
      )}
    </>
  );
}
