/**
 * MedicationAdministration Performer Function Codes
 * http://hl7.org/fhir/ValueSet/med-admin-perform-function
 */
export const MedicationAdministrationPerformerFunctionCodesCode = {} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type MedicationAdministrationPerformerFunctionCodesCode =
  typeof MedicationAdministrationPerformerFunctionCodesCode[keyof typeof MedicationAdministrationPerformerFunctionCodesCode];
