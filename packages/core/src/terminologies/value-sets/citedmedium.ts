/**
 * NLM codes Internet or Print.
 * http://hl7.org/fhir/ValueSet/cited-medium
 */
export const CitedMediumCode = {} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type CitedMediumCode =
  typeof CitedMediumCode[keyof typeof CitedMediumCode];
