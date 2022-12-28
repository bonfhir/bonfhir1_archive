/**
 * ***No description***
 * http://terminology.hl7.org/ValueSet/v3-BuccalTablet
 */
export const BuccalTabletCode = {
  /**
   * Buccal Tablet
   */
  BUCTAB: "BUCTAB",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type BuccalTabletCode =
  typeof BuccalTabletCode[keyof typeof BuccalTabletCode];
