/**
 * ***No description***
 * http://terminology.hl7.org/ValueSet/v3-Wiyot
 */
export const WiyotCode = {
  /**
   * Wiyot
   */
  Wiyot: "1704-6",

  /**
   * Table Bluff
   */
  TableBluff: "1705-3",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type WiyotCode = typeof WiyotCode[keyof typeof WiyotCode];
