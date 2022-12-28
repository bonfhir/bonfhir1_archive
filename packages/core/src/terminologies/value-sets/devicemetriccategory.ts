/**
 * Describes the category of the metric.
 * http://hl7.org/fhir/ValueSet/metric-category
 */
export const DeviceMetricCategoryCode = {} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type DeviceMetricCategoryCode =
  typeof DeviceMetricCategoryCode[keyof typeof DeviceMetricCategoryCode];
