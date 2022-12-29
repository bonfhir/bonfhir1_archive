/**
 * ***No description***
 * http://terminology.hl7.org/ValueSet/v3-CaliforniaAthapaskan
 */
export const CaliforniaAthapaskanCode = {
  /**
   * Hupa
   */
  Hupa: "x-HUP",

  /**
   * Cahto
   */
  Cahto: "x-KTW",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type CaliforniaAthapaskanCode =
  typeof CaliforniaAthapaskanCode[keyof typeof CaliforniaAthapaskanCode];
