/**
 * Type for quality report.
 * http://hl7.org/fhir/ValueSet/quality-type
 */
export const qualityTypeCode = {} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type qualityTypeCode =
  typeof qualityTypeCode[keyof typeof qualityTypeCode];
