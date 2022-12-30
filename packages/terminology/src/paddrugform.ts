/**
 * ***No description***
 * http://terminology.hl7.org/ValueSet/v3-PadDrugForm
 */
export const PadDrugFormCode = {
  /**
   * Pad
   */
  PAD: "PAD",

  /**
   * Medicated Pad
   */
  MEDPAD: "MEDPAD",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type PadDrugFormCode =
  typeof PadDrugFormCode[keyof typeof PadDrugFormCode];
