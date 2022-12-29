/**
 * Cap types for medication containers
 * http://terminology.hl7.org/ValueSet/v3-MedicationCap
 */
export const MedicationCapCode = {
  /**
   * ChildProof
   */
  ChildProof: "CHILD",

  /**
   * EasyOpen
   */
  EasyOpen: "EASY",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type MedicationCapCode =
  typeof MedicationCapCode[keyof typeof MedicationCapCode];
