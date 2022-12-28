/**
 * Codes used to identify health care device metric types and units and component types as part of the ISO/IEEE 11073-10101 Medical Device Communication Nomenclature.
 * http://hl7.org/fhir/ValueSet/devicemetric-type
 */
export const DeviceMetricAndComponentTypesCode = {} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type DeviceMetricAndComponentTypesCode =
  typeof DeviceMetricAndComponentTypesCode[keyof typeof DeviceMetricAndComponentTypesCode];
