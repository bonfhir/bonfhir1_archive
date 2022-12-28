/**
 * Classification of warning type.
 * http://hl7.org/fhir/ValueSet/warning-type
 */
export const WarningTypeCode = {} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type WarningTypeCode =
  typeof WarningTypeCode[keyof typeof WarningTypeCode];
