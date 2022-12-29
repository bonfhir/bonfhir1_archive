/**
 * ***No description***
 * http://terminology.hl7.org/ValueSet/v3-Arapahoan
 */
export const ArapahoanCode = {
  /**
   * ArapahoGrosVentre
   */
  ArapahoGrosVentre: "_ArapahoGrosVentre",

  /**
   * Arapaho
   */
  Arapaho: "x-ARP",

  /**
   * Gros Ventre
   */
  GrosVentre: "x-ATS",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type ArapahoanCode = typeof ArapahoanCode[keyof typeof ArapahoanCode];
