/**
 * Describes the operational status of the DeviceMetric.
 * http://hl7.org/fhir/ValueSet/metric-operational-status
 */
export const DeviceMetricOperationalStatusCode = {} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type DeviceMetricOperationalStatusCode =
  typeof DeviceMetricOperationalStatusCode[keyof typeof DeviceMetricOperationalStatusCode];
