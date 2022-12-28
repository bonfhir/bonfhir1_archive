/**
 * Describes the typical color of representation.
 * http://hl7.org/fhir/ValueSet/metric-color
 */
export const DeviceMetricColorCode = {} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type DeviceMetricColorCode =
  typeof DeviceMetricColorCode[keyof typeof DeviceMetricColorCode];
