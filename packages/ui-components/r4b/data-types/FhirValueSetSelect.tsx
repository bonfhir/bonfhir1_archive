import {
  ValueSetExpandOperationParameters,
  ValueSetExpandOperationResult,
} from "@bonfhir/core/r4b";
import { useFhirExecute } from "@bonfhir/fhir-query/r4b";
import { CodeableConcept, Coding, ValueSetExpansionContains } from "fhir/r4";
import { ReactElement, useCallback, useMemo } from "react";
import { useFhirUIComponentsContext } from "../FhirUIComponentsContext";
import { SelectItem } from "../FhirUIComponentsRenderer";

export interface FhirValueSetSelectPropsExpansions {
  valueSetExpansions: ValueSetExpansionContains[];
}

export interface FhirValueSetSelectPropsExpand {
  valueSetExpand: ValueSetExpandOperationParameters;
}

export interface FhirValueSetSelectPropsCode {
  kind: "code";
  value: string | null | undefined;
  onChange?: ((value: string | undefined) => void) | null | undefined;
}

export interface FhirValueSetSelectPropsCoding {
  kind: "coding";
  value: Coding | null | undefined;
  onChange?: ((value: Coding | undefined) => void) | null | undefined;
}

export interface FhirValueSetSelectPropsCodeableConcept {
  kind: "codeableConcept";
  value: CodeableConcept | null | undefined;
  onChange?: ((value: CodeableConcept | undefined) => void) | null | undefined;
}

export type FhirValueSetSelectProps<TRendererProps = unknown> = TRendererProps &
  (FhirValueSetSelectPropsExpansions | FhirValueSetSelectPropsExpand) &
  (
    | FhirValueSetSelectPropsCode
    | FhirValueSetSelectPropsCoding
    | FhirValueSetSelectPropsCodeableConcept
  );

export function FhirValueSetSelect<TRendererProps = unknown>(
  props: FhirValueSetSelectProps<TRendererProps>
): ReactElement | null {
  const uiContext = useFhirUIComponentsContext();

  const { valueSetExpand, valueSetExpansions, ...options } =
    props as unknown as FhirValueSetSelectPropsExpand &
      FhirValueSetSelectPropsExpansions;

  const valueSetExpandQuery = useFhirExecute<
    ValueSetExpandOperationResult,
    ValueSetExpandOperationParameters
  >(
    "$expand",
    { type: "ValueSet", parameters: valueSetExpand },
    {
      enabled: !!valueSetExpand,
      cacheTime: Infinity,
    }
  );

  const items = useMemo<SelectItem[]>(() => {
    if (valueSetExpansions) {
      return valueSetExpansions.map((x) => ({
        label: uiContext.dataTypeAdapter.coding.format(x),
        value: x.code || "",
        fhirValue: x,
      }));
    } else if (valueSetExpandQuery.data) {
      return (valueSetExpandQuery.data.expansion?.contains || []).map((x) => ({
        label: uiContext.dataTypeAdapter.coding.format(x),
        value: x.code || "",
        fhirValue: x,
      }));
    }

    return [];
  }, [valueSetExpansions, valueSetExpandQuery.data]);

  const onChange = useCallback(
    (value: string) => {
      if (!props.onChange) {
        return;
      }

      if (!value) {
        props.onChange(undefined);
        return;
      }

      switch (props.kind) {
        case "code":
          props.onChange(value);
          break;
        case "coding":
        case "codeableConcept":
          //TODO
          break;
      }
    },
    [props.kind, props.onChange]
  );

  let value = "";
  switch (props.kind) {
    case "code":
      console.log("code", props.value);
      value = props.value || "";
      break;
    case "coding":
      value = props.value?.code || "";
      break;
    case "codeableConcept":
      value = props.value?.coding?.[0]?.code || "";
      break;
  }

  return uiContext.renderer.select({
    value,
    items,
    onChange,
    loading: valueSetExpandQuery.isInitialLoading,
    ...options,
  });
}
