/**
 * Codes describing the reason why a family member's history is not available.
 * http://terminology.hl7.org/ValueSet/history-absent-reason
 */
export const FamilyHistoryAbsentReasonCode = {
  /**
   * Subject Unknown
   */
  "subject-unknown": "subject-unknown",

  /**
   * Information Withheld
   */
  withheld: "withheld",

  /**
   * Unable To Obtain
   */
  "unable-to-obtain": "unable-to-obtain",

  /**
   * Deferred
   */
  deferred: "deferred",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type FamilyHistoryAbsentReasonCode =
  typeof FamilyHistoryAbsentReasonCode[keyof typeof FamilyHistoryAbsentReasonCode];
