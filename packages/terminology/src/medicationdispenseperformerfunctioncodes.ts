/**
 * MedicationDispense Performer Function Codes
 * http://terminology.hl7.org/ValueSet/medicationdispense-performer-function
 */
export const MedicationDispensePerformerFunctionCodesCode = {
  /**
   * Data Enterer
   */
  dataenterer: "dataenterer",

  /**
   * Packager
   */
  packager: "packager",

  /**
   * Checker
   */
  checker: "checker",

  /**
   * Final Checker
   */
  finalchecker: "finalchecker",

  /**
   * Counsellor
   */
  counsellor: "counsellor",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type MedicationDispensePerformerFunctionCodesCode =
  typeof MedicationDispensePerformerFunctionCodesCode[keyof typeof MedicationDispensePerformerFunctionCodesCode];
