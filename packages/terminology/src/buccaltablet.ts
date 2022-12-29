/**
 * ***No description***
 * http://terminology.hl7.org/ValueSet/v3-BuccalTablet
 */
export const BuccalTabletCode = {
  /**
   * Buccal Tablet
   */
  BuccalTablet: "BUCTAB",

  /**
   * Sustained Release Buccal Tablet
   */
  SustainedReleaseBuccalTablet: "SRBUCTAB",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type BuccalTabletCode =
  typeof BuccalTabletCode[keyof typeof BuccalTabletCode];
