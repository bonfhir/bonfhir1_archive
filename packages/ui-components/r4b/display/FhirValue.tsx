/* eslint-disable @typescript-eslint/no-explicit-any */
import {
  FhirDataTypeAdapter,
  ValueSetExpandOperationParameters,
  ValueSetExpandOperationResult,
} from "@bonfhir/core/r4b";
import { useFhirExecute } from "@bonfhir/fhir-query/r4b";
import { ReactElement } from "react";
import { useFhirUIComponentsContext } from "../FhirUIComponentsContext";

export interface FhirValuePropsCombination<TAdapterName, TValue, TOptions> {
  /**
   * The FHIR data tyoe.
   */
  type: TAdapterName;

  /**
   * The actual FHIR value.
   */
  value: TValue | null | undefined;

  /**
   * Any option used to render.
   */
  options?: TOptions | null | undefined;
}

export type FhirValuePropsAdapter<
  TAdapterName extends keyof Omit<FhirDataTypeAdapter, "locale" | "message">
> = FhirValuePropsCombination<
  TAdapterName,
  Parameters<FhirDataTypeAdapter[TAdapterName]["format"]>[0],
  Parameters<FhirDataTypeAdapter[TAdapterName]["format"]>[1]
>;

export type FhirValuePropsAdapterValueSetExpand<
  TAdapterName extends keyof Omit<FhirDataTypeAdapter, "locale" | "message">
> = FhirValuePropsCombination<
  TAdapterName,
  Parameters<FhirDataTypeAdapter[TAdapterName]["format"]>[0],
  Omit<
    Parameters<FhirDataTypeAdapter[TAdapterName]["format"]>[1],
    "valueSetExpansions"
  > &
    HasValueSetExpand
>;

export type HasValueSetExpand = {
  /**
   * If relevant, pass the options for a [ValueSet expand](http://www.hl7.org/fhir/valueset-operation-expand.html)
   * operation that will be invoked, and will populate the `valueSetExpansion` in return.
   */
  valueSetExpand: ValueSetExpandOperationParameters;
};

export type FhirValueProps =
  | FhirValuePropsAdapter<"code">
  | FhirValuePropsAdapterValueSetExpand<"code">
  | FhirValuePropsAdapter<"coding">
  | FhirValuePropsAdapterValueSetExpand<"coding">
  | FhirValuePropsAdapter<"codeableConcept">
  | FhirValuePropsAdapterValueSetExpand<"codeableConcept">
  | FhirValuePropsAdapter<"boolean">
  | FhirValuePropsAdapter<"date">
  | FhirValuePropsAdapter<"dateTime">
  | FhirValuePropsAdapter<"instant">
  | FhirValuePropsAdapter<"integer">
  | FhirValuePropsAdapter<"decimal">
  | FhirValuePropsAdapter<"uri">
  | FhirValuePropsAdapter<"url">
  | FhirValuePropsAdapter<"canonical">
  | FhirValuePropsAdapter<"markdown">
  | FhirValuePropsAdapter<"money">
  | FhirValuePropsAdapter<"period">
  | FhirValuePropsAdapter<"quantity">
  | FhirValuePropsAdapter<"range">
  | FhirValuePropsAdapter<"ratio">
  | FhirValuePropsAdapter<"ratioRange">
  | FhirValuePropsAdapter<"simpleQuantity">
  | FhirValuePropsAdapter<"age">
  | FhirValuePropsAdapter<"count">
  | FhirValuePropsAdapter<"distance">
  | FhirValuePropsAdapter<"duration">;

/**
 * Render a [FHIR datatype](https://hl7.org/fhir/datatypes.html) as a string, using the context
 * `dataTypeAdapter`.
 *
 * All options applicable to {@link FhirDataTypeAdapter} can be used here.
 *
 * Additionally, for data types where it makes sense, you can specify a `valueSetExpand` option that will trigger
 * the `$expand`operation on the server to fetch the expanded values.
 *
 * @example
 *
 *  <FhirValue type="date" value={patient.birthDate} options={{ dateStyle: "long" }} />
 *
 *  <FhirValue type="code" value={patient.gender} options={{ valueSetExpand: { url: "http://hl7.org/fhir/ValueSet/administrative-gender" }}} />
 *
 * @see use the `value` renderer to customize rendering.
 */
export function FhirValue(props: FhirValueProps): ReactElement | null {
  const uiContext = useFhirUIComponentsContext();

  const { valueSetExpand, ...options } =
    (props.options as HasValueSetExpand) || {};

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

  if (uiContext.renderer.value) {
    return uiContext.renderer.value({
      ...props,
      dataTypeAdapter: uiContext.dataTypeAdapter,
      valueSetExpandQuery,
      formatted: uiContext.dataTypeAdapter[props.type].format(
        props.value as any,
        {
          ...options,
          valueSetExpansions:
            (options as any).valueSetExpansions ||
            valueSetExpandQuery.data?.expansion?.contains,
        } as any
      ),
    });
  }

  if (props.type === "markdown" && props.options?.style === "html") {
    // TODO: make it safer
    return (
      <div
        dangerouslySetInnerHTML={{
          __html: uiContext.dataTypeAdapter.markdown.format(
            props.value,
            props.options
          ),
        }}
      />
    );
  }

  return (
    <>
      {uiContext.dataTypeAdapter[props.type].format(
        props.value as any,
        {
          ...options,
          valueSetExpansions:
            (options as any).valueSetExpansions ||
            valueSetExpandQuery.data?.expansion?.contains,
        } as any
      )}
    </>
  );
}