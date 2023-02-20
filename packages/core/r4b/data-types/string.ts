import { FhirDataTypeAdapter } from "../data-type-adapter";

/**
 * String and associated types
 */
export interface FhirStringTypeAdapter {
  locale: FhirDataTypeAdapter["locale"];
  parse(value: string | null | undefined): string | undefined;
  format(
    value: string | null | undefined,
    _options?: Record<string, never>
  ): string | undefined;
}

export function fhirStringTypeAdapter(
  locale: FhirDataTypeAdapter["locale"]
): FhirStringTypeAdapter {
  return {
    locale,
    parse: (value) => value || undefined,
    format: (value, _options) => value || undefined,
  };
}

export type FhirBase64BinaryTypeAdapter = FhirStringTypeAdapter;
export type FhirIdTypeAdapter = FhirStringTypeAdapter;
export type FhirUuidTypeAdapter = FhirStringTypeAdapter;
export type FhirOidTypeAdapter = FhirStringTypeAdapter;

export const fhirBase64BinaryTypeAdapter = fhirStringTypeAdapter.bind({});
export const fhirIdTypeAdapter = fhirStringTypeAdapter.bind({});
export const fhirOidTypeAdapter = fhirStringTypeAdapter.bind({});
export const fhirUuidTypeAdapter = fhirStringTypeAdapter.bind({});
