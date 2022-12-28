/**
 * ***No description***
 * http://terminology.hl7.org/ValueSet/v3-OregonAthapaskan
 */
export const OregonAthapaskanCode = {
  /**
   * Tolowa
   */
  "x-TOL": "x-TOL",

  /**
   * Tututni
   */
  "x-TUU": "x-TUU",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type OregonAthapaskanCode =
  typeof OregonAthapaskanCode[keyof typeof OregonAthapaskanCode];
