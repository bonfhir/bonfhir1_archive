/**
 * Example set of codes that can be used for billing purposes.
 * http://terminology.hl7.org/ValueSet/chargeitem-billingcodes
 */
export const ChargeItemCodeCode = {
  /**
   * Unvorhergesehene Inanspruchnahme
   */
  "1100": "1100",

  /**
   * Notfallpauschale
   */
  "1210": "1210",

  /**
   * Grundpauschale
   */
  "1320": "1320",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type ChargeItemCodeCode =
  typeof ChargeItemCodeCode[keyof typeof ChargeItemCodeCode];
