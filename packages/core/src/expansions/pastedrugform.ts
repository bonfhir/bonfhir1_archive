/**
 * A semisolid dosage form that contains one or more drug substances intended for topical application.
 * http://terminology.hl7.org/ValueSet/v3-PasteDrugForm
 */
export const PasteDrugFormCode = {
  /**
   * Paste
   */
  PASTE: "PASTE",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type PasteDrugFormCode =
  typeof PasteDrugFormCode[keyof typeof PasteDrugFormCode];
