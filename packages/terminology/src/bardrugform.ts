/**
 * ***No description***
 * http://terminology.hl7.org/ValueSet/v3-BarDrugForm
 */
export const BarDrugFormCode = {
  /**
   * Bar
   */
  Bar: "BAR",

  /**
   * Bar Soap
   */
  BarSoap: "BARSOAP",

  /**
   * Medicated Bar Soap
   */
  MedicatedBarSoap: "MEDBAR",

  /**
   * Chewable Bar
   */
  ChewableBar: "CHEWBAR",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type BarDrugFormCode =
  typeof BarDrugFormCode[keyof typeof BarDrugFormCode];
