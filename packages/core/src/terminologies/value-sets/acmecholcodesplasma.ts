/**
 * ACME Codes for Cholesterol: Plasma only - demonstrating the use of a filter defined in a CodeSystem
 * http://hl7.org/fhir/ValueSet/example-filter
 */
export const ACMECholCodesPlasmaCode = {} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type ACMECholCodesPlasmaCode =
  typeof ACMECholCodesPlasmaCode[keyof typeof ACMECholCodesPlasmaCode];
