/**
 * ***No description***
 * http://terminology.hl7.org/ValueSet/v3-PacificCoastAthapaskan
 */
export const PacificCoastAthapaskanCode = {
  /**
   * CaliforniaAthapaskan
   */
  CaliforniaAthapaskan: "_CaliforniaAthapaskan",

  /**
   * Hupa
   */
  Hupa: "x-HUP",

  /**
   * Cahto
   */
  Cahto: "x-KTW",

  /**
   * OregonAthapaskan
   */
  OregonAthapaskan: "_OregonAthapaskan",

  /**
   * Tolowa
   */
  Tolowa: "x-TOL",

  /**
   * Tututni
   */
  Tututni: "x-TUU",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type PacificCoastAthapaskanCode =
  typeof PacificCoastAthapaskanCode[keyof typeof PacificCoastAthapaskanCode];
