/**
 * Codes describing the reason why a family member's history is not available.
 * http://terminology.hl7.org/ValueSet/history-absent-reason
 */
export const FamilyHistoryAbsentReasonCode = {
  /**
   * Subject Unknown
   */
  SubjectUnknown: "subject-unknown",

  /**
   * Information Withheld
   */
  InformationWithheld: "withheld",

  /**
   * Unable To Obtain
   */
  UnableToObtain: "unable-to-obtain",

  /**
   * Deferred
   */
  Deferred: "deferred",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type FamilyHistoryAbsentReasonCode =
  typeof FamilyHistoryAbsentReasonCode[keyof typeof FamilyHistoryAbsentReasonCode];
