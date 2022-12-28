/**
 * This identifies the vaccine substance administered - CVX codes.
 * http://hl7.org/fhir/ValueSet/vaccine-code
 */
export const VaccineAdministeredValueSetCode = {} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type VaccineAdministeredValueSetCode =
  typeof VaccineAdministeredValueSetCode[keyof typeof VaccineAdministeredValueSetCode];
