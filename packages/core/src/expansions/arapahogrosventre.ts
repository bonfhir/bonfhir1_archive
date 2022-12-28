/**
 * ***No description***
 * http://terminology.hl7.org/ValueSet/v3-ArapahoGrosVentre
 */
export const ArapahoGrosVentreCode = {
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
export type ArapahoGrosVentreCode =
  typeof ArapahoGrosVentreCode[keyof typeof ArapahoGrosVentreCode];
