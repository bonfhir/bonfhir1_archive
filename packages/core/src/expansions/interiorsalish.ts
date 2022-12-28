/**
 * ***No description***
 * http://terminology.hl7.org/ValueSet/v3-InteriorSalish
 */
export const InteriorSalishCode = {
  /**
   * Columbian
   */
  "x-COL": "x-COL",

  /**
   * Coeur D'alene
   */
  "x-CRD": "x-CRD",

  /**
   * Kalispel
   */
  "x-FLA": "x-FLA",

  /**
   * Okanagan
   */
  "x-OKA": "x-OKA",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type InteriorSalishCode =
  typeof InteriorSalishCode[keyof typeof InteriorSalishCode];
