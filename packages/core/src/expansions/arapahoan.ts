/**
 * ***No description***
 * http://terminology.hl7.org/ValueSet/v3-Arapahoan
 */
export const ArapahoanCode = {
  /**
   * ArapahoGrosVentre
   */
  _ArapahoGrosVentre: "_ArapahoGrosVentre",

  /**
   * Arapaho
   */
  "x-ARP": "x-ARP",

  /**
   * Gros Ventre
   */
  "x-ATS": "x-ATS",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type ArapahoanCode = typeof ArapahoanCode[keyof typeof ArapahoanCode];
