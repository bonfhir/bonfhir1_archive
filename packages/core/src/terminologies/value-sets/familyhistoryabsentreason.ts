/**
 * Codes describing the reason why a family member's history is not available.
 * http://hl7.org/fhir/ValueSet/history-absent-reason
 */
export const FamilyHistoryAbsentReasonCode = {} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type FamilyHistoryAbsentReasonCode =
  typeof FamilyHistoryAbsentReasonCode[keyof typeof FamilyHistoryAbsentReasonCode];
