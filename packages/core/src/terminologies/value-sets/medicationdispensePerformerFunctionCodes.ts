/**
 * MedicationDispense Performer Function Codes
 * http://hl7.org/fhir/ValueSet/medicationdispense-performer-function
 */
export const MedicationDispensePerformerFunctionCodesCode = {} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type MedicationDispensePerformerFunctionCodesCode =
  typeof MedicationDispensePerformerFunctionCodesCode[keyof typeof MedicationDispensePerformerFunctionCodesCode];
