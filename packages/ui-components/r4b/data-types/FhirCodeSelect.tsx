import {
  ValueSetExpandOperationParameters,
  ValueSetExpandOperationResult,
} from "@bonfhir/core/r4b";
import { useFhirExecute } from "@bonfhir/fhir-query/r4b";
import { ValueSetExpansionContains } from "fhir/r4";
import { ReactElement, useCallback, useMemo } from "react";
import { useFhirUIComponentsContext } from "../FhirUIComponentsContext";
import { SelectItem } from "../FhirUIComponentsRenderer";

export interface FhirCodeSelectPropsExpansions {
  valueSetExpansions: ValueSetExpansionContains[];
}

export interface FhirCodeSelectPropsExpand {
  valueSetExpand: ValueSetExpandOperationParameters;
}

export interface FhirCodeSelectValueProps {
  value?: string | null | undefined;
  onChange?: ((value: string | undefined) => void) | null | undefined;
}

export type FhirCodeSelectProps<TRendererProps = unknown> = TRendererProps &
  (FhirCodeSelectPropsExpansions | FhirCodeSelectPropsExpand) &
  FhirCodeSelectValueProps;

export function FhirCodeSelect<TRendererProps = unknown>(
  props: FhirCodeSelectProps<TRendererProps>
): ReactElement | null {
  const uiContext = useFhirUIComponentsContext();

  const {
    valueSetExpand,
    valueSetExpansions,
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

      onChange(value);
    },
    [onChange]
  );

  return uiContext.renderer.select({
    value: value || "",
    items,
    onChange: managedOnChange,
    loading: valueSetExpandQuery.isInitialLoading,
    ...options,
  });
}
