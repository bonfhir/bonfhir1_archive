/**
 * A code that identifies the status of the family history record.
 * http://hl7.org/fhir/ValueSet/history-status
 */
export const FamilyHistoryStatusCode = {} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type FamilyHistoryStatusCode =
  typeof FamilyHistoryStatusCode[keyof typeof FamilyHistoryStatusCode];
