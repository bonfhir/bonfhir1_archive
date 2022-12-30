/**
 * ***No description***
 * http://terminology.hl7.org/ValueSet/v3-BarDrugForm
 */
export const BarDrugFormCode = {
  /**
   * Bar
   */
  BAR: "BAR",

  /**
   * Bar Soap
   */
  BARSOAP: "BARSOAP",

  /**
   * Medicated Bar Soap
   */
  MEDBAR: "MEDBAR",

  /**
   * Chewable Bar
   */
  CHEWBAR: "CHEWBAR",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type BarDrugFormCode =
  typeof BarDrugFormCode[keyof typeof BarDrugFormCode];
