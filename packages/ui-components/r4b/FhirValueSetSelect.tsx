import {
  buildCodeableConcept,
  ValueSetExpandOperationParameters,
  ValueSetExpandOperationResult,
} from "@bonfhir/core/r4b";
import { useFhirExecute } from "@bonfhir/fhir-query/r4b";
import { CodeableConcept, Coding, ValueSetExpansionContains } from "fhir/r4";
import { ReactElement, useCallback, useMemo } from "react";
import { useFhirUIComponentsContext } from "./FhirUIComponentsContext";
import { SelectItem } from "./FhirUIComponentsRenderer";

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

  const {
    valueSetExpand,
    valueSetExpansions,
    kind,
    value,
    onChange,
    ...options
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
  } = props as any;

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
      return valueSetExpansions.map((x: ValueSetExpansionContains) => ({
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

  const managedOnChange = useCallback(
    (value: string) => {
      if (!onChange) {
        return;
      }

      if (!value) {
        onChange(undefined);
        return;
      }

      switch (kind) {
        case "code":
          onChange(value);
          break;
        case "coding":
          onChange({
            code: value,
            system: items.find((x) => x.value === value)?.fhirValue?.system,
            display: items.find((x) => x.value === value)?.fhirValue?.display,
          });
          break;
        case "codeableConcept":
          onChange(
            buildCodeableConcept({
              coding: [
                {
                  code: value,
                  system: items.find((x) => x.value === value)?.fhirValue
                    ?.system,
                  display: items.find((x) => x.value === value)?.fhirValue
                    ?.display,
                },
              ],
            })
          );
          break;
      }
    },
    [kind, onChange]
  );

  let managedValue = "";
  switch (kind) {
    case "code":
      managedValue = value || "";
      break;
    case "coding":
      managedValue = value?.code || "";
      break;
    case "codeableConcept":
      managedValue = value?.coding?.[0]?.code || "";
      break;
  }

  return uiContext.renderer.select({
    value: managedValue,
    items,
    onChange: managedOnChange,
    loading: valueSetExpandQuery.isInitialLoading,
    ...options,
  });
}
