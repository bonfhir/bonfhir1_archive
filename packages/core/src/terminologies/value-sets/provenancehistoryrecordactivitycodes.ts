/**
 * Codes for Provenance activities that are relevant when capturing event history for resources.
 * http://hl7.org/fhir/ValueSet/provenance-history-record-activity
 */
export const ProvenanceHistoryRecordActivityCodesCode = {} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type ProvenanceHistoryRecordActivityCodesCode =
  typeof ProvenanceHistoryRecordActivityCodesCode[keyof typeof ProvenanceHistoryRecordActivityCodesCode];
