/**
 * ***No description***
 * http://terminology.hl7.org/ValueSet/v3-DosageProblem
 */
export const DosageProblemCode = {
  /**
   * Dosage problem
   */
  DOSE: "DOSE",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type DosageProblemCode =
  typeof DosageProblemCode[keyof typeof DosageProblemCode];
