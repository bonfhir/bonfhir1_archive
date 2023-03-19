/* eslint-disable @typescript-eslint/no-explicit-any */
import {
  FhirDataTypeAdapter,
  ValueSetExpandOperationParameters,
  ValueSetExpandOperationResult,
} from "@bonfhir/core/r4b";
import { useFhirExecute } from "@bonfhir/fhir-query/r4b";
import { ReactElement, useEffect, useState } from "react";
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

export type FhirValuePropsAdapterRelative<
  TAdapterName extends keyof Omit<FhirDataTypeAdapter, "locale" | "message">
> = FhirValuePropsCombination<
  TAdapterName,
  Parameters<FhirDataTypeAdapter[TAdapterName]["format"]>[0],
  Parameters<FhirDataTypeAdapter[TAdapterName]["format"]>[1] &
    HasRefreshInterval
>;

export type HasRefreshInterval = {
  /**
   * When using a `relative` style, this is the auto-refresh interval to re-render the relative time.
   * Set to 0 to disable. Defaults to 30 seconds.
   */
  refreshInterval?: number | null | undefined;
};

export type FhirValueProps =
  | FhirValuePropsAdapter<"address">
  | FhirValuePropsAdapter<"age">
  | FhirValuePropsAdapter<"base64Binary">
  | FhirValuePropsAdapter<"boolean">
  | FhirValuePropsAdapter<"canonical">
  | FhirValuePropsAdapter<"code">
  | FhirValuePropsAdapterValueSetExpand<"code">
  | FhirValuePropsAdapter<"codeableConcept">
  | FhirValuePropsAdapterValueSetExpand<"codeableConcept">
  | FhirValuePropsAdapter<"coding">
  | FhirValuePropsAdapterValueSetExpand<"coding">
  | FhirValuePropsAdapter<"contactPoint">
  | FhirValuePropsAdapter<"count">
  | FhirValuePropsAdapterRelative<"date">
  | FhirValuePropsAdapterRelative<"dateTime">
  | FhirValuePropsAdapter<"decimal">
  | FhirValuePropsAdapter<"distance">
  | FhirValuePropsAdapter<"duration">
  | FhirValuePropsAdapter<"humanName">
  | FhirValuePropsAdapter<"id">
  | FhirValuePropsAdapter<"identifier">
  | FhirValuePropsAdapterRelative<"instant">
  | FhirValuePropsAdapter<"integer">
  | FhirValuePropsAdapter<"markdown">
  | FhirValuePropsAdapter<"money">
  | FhirValuePropsAdapter<"oid">
  | FhirValuePropsAdapter<"period">
  | FhirValuePropsAdapter<"positiveInt">
  | FhirValuePropsAdapter<"quantity">
  | FhirValuePropsAdapter<"range">
  | FhirValuePropsAdapter<"ratio">
  | FhirValuePropsAdapter<"ratioRange">
  | FhirValuePropsAdapter<"simpleQuantity">
  | FhirValuePropsAdapter<"string">
  | FhirValuePropsAdapter<"unsignedInt">
  | FhirValuePropsAdapter<"uri">
  | FhirValuePropsAdapter<"url">;

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
  const [, setTimeState] = useState(Date.now());

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

  useEffect(() => {
    if (
      (props as FhirValuePropsAdapterRelative<"date">).options?.dateStyle !==
      "relative"
    ) {
      return;
    }

    const refreshInterval = (props.options as HasRefreshInterval)
      ?.refreshInterval;
    const interval = setInterval(
      () => {
        setTimeState(Date.now());
      },
      refreshInterval == null ? 30000 : refreshInterval
    );
    return () => {
      clearInterval(interval);
    };
  }, [
    props.type,
    (props as FhirValuePropsAdapterRelative<"date">).options?.dateStyle,
    (props.options as HasRefreshInterval)?.refreshInterval,
  ]);

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
