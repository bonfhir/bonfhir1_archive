/**
 * Codes providing the status/availability of a specimen.
 * http://hl7.org/fhir/ValueSet/specimen-status
 */
export const SpecimenStatusCode = {} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type SpecimenStatusCode =
  typeof SpecimenStatusCode[keyof typeof SpecimenStatusCode];
