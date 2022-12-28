/**
 * Proposed therapy may be inappropriate based on the patient's weight
 * http://terminology.hl7.org/ValueSet/v3-WeightAlert
 */
export const WeightAlertCode = {
  /**
   * High Dose for Weight Alert
   */
  DOSEHINDW: "DOSEHINDW",

  /**
   * Low Dose for Weight Alert
   */
  DOSELINDW: "DOSELINDW",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type WeightAlertCode =
  typeof WeightAlertCode[keyof typeof WeightAlertCode];
