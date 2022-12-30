/**
 * An intimate mixture of dry, finely divided drugs and/or chemicals that may be intended for internal or external use.
 * http://terminology.hl7.org/ValueSet/v3-PowderDrugForm
 */
export const PowderDrugFormCode = {
  /**
   * Powder
   */
  POWD: "POWD",

  /**
   * Topical Powder
   */
  TOPPWD: "TOPPWD",

  /**
   * Rectal Powder
   */
  RECPWD: "RECPWD",

  /**
   * Vaginal Powder
   */
  VAGPWD: "VAGPWD",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type PowderDrugFormCode =
  typeof PowderDrugFormCode[keyof typeof PowderDrugFormCode];
