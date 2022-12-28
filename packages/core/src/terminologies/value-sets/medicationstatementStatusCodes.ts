/**
 * MedicationStatement Status Codes
 * http://hl7.org/fhir/ValueSet/medication-statement-status
 */
export const MedicationStatementStatusCodesCode = {} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type MedicationStatementStatusCodesCode =
  typeof MedicationStatementStatusCodesCode[keyof typeof MedicationStatementStatusCodesCode];
