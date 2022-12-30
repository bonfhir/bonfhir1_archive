/**
 * ***No description***
 * http://terminology.hl7.org/ValueSet/v3-PacificCoastAthapaskan
 */
export const PacificCoastAthapaskanCode = {
  /**
   * CaliforniaAthapaskan
   */
  _CaliforniaAthapaskan: "_CaliforniaAthapaskan",

  /**
   * Hupa
   */
  "x-HUP": "x-HUP",

  /**
   * Cahto
   */
  "x-KTW": "x-KTW",

  /**
   * OregonAthapaskan
   */
  _OregonAthapaskan: "_OregonAthapaskan",

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
export type PacificCoastAthapaskanCode =
  typeof PacificCoastAthapaskanCode[keyof typeof PacificCoastAthapaskanCode];
