/**
 * ***No description***
 * http://terminology.hl7.org/ValueSet/v3-BuccalTablet
 */
export const BuccalTabletCode = {
  /**
   * Buccal Tablet
   */
  BUCTAB: "BUCTAB",

  /**
   * Sustained Release Buccal Tablet
   */
  SRBUCTAB: "SRBUCTAB",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type BuccalTabletCode =
  typeof BuccalTabletCode[keyof typeof BuccalTabletCode];
