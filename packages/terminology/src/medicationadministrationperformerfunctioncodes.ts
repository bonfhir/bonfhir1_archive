/**
 * MedicationAdministration Performer Function Codes
 * http://terminology.hl7.org/ValueSet/med-admin-perform-function
 */
export const MedicationAdministrationPerformerFunctionCodesCode = {
  /**
   * Performer
   */
  Performer: "performer",

  /**
   * Verifier
   */
  Verifier: "verifier",

  /**
   * Witness
   */
  Witness: "witness",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type MedicationAdministrationPerformerFunctionCodesCode =
  typeof MedicationAdministrationPerformerFunctionCodesCode[keyof typeof MedicationAdministrationPerformerFunctionCodesCode];
