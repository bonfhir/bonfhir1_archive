/**
 * MedicationDispense Performer Function Codes
 * http://terminology.hl7.org/ValueSet/medicationdispense-performer-function
 */
export const MedicationDispensePerformerFunctionCodesCode = {
  /**
   * Data Enterer
   */
  DataEnterer: "dataenterer",

  /**
   * Packager
   */
  Packager: "packager",

  /**
   * Checker
   */
  Checker: "checker",

  /**
   * Final Checker
   */
  FinalChecker: "finalchecker",

  /**
   * Counsellor
   */
  Counsellor: "counsellor",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type MedicationDispensePerformerFunctionCodesCode =
  typeof MedicationDispensePerformerFunctionCodesCode[keyof typeof MedicationDispensePerformerFunctionCodesCode];
