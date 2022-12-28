/**
 * A value representing whether the primary reproductive organs of NonPersonLivingSubject are present.
 * http://terminology.hl7.org/ValueSet/v3-GenderStatus
 */
export const GenderStatusCode = {
  /**
   * Intact
   */
  I: "I",

  /**
   * Neutered
   */
  N: "N",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type GenderStatusCode =
  typeof GenderStatusCode[keyof typeof GenderStatusCode];
