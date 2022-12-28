/**
 * An intimate mixture of dry, finely divided drugs and/or chemicals that may be intended for internal or external use.
 * http://terminology.hl7.org/ValueSet/v3-PowderDrugForm
 */
export const PowderDrugFormCode = {
  /**
   * Powder
   */
  POWD: "POWD",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type PowderDrugFormCode =
  typeof PowderDrugFormCode[keyof typeof PowderDrugFormCode];
