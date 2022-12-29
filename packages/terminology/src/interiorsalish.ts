/**
 * ***No description***
 * http://terminology.hl7.org/ValueSet/v3-InteriorSalish
 */
export const InteriorSalishCode = {
  /**
   * Columbian
   */
  Columbian: "x-COL",

  /**
   * Coeur D'alene
   */
  CoeurDalene: "x-CRD",

  /**
   * Kalispel
   */
  Kalispel: "x-FLA",

  /**
   * Okanagan
   */
  Okanagan: "x-OKA",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type InteriorSalishCode =
  typeof InteriorSalishCode[keyof typeof InteriorSalishCode];
