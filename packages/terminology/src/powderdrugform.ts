/**
 * An intimate mixture of dry, finely divided drugs and/or chemicals that may be intended for internal or external use.
 * http://terminology.hl7.org/ValueSet/v3-PowderDrugForm
 */
export const PowderDrugFormCode = {
  /**
   * Powder
   */
  Powder: "POWD",

  /**
   * Topical Powder
   */
  TopicalPowder: "TOPPWD",

  /**
   * Rectal Powder
   */
  RectalPowder: "RECPWD",

  /**
   * Vaginal Powder
   */
  VaginalPowder: "VAGPWD",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type PowderDrugFormCode =
  typeof PowderDrugFormCode[keyof typeof PowderDrugFormCode];
