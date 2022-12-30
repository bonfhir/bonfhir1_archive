/**
 * ***No description***
 * http://terminology.hl7.org/ValueSet/v3-InteractionDetectedIssueCode
 */
export const InteractionDetectedIssueCodeCode = {
  /**
   * Food Interaction Alert
   */
  FOOD: "FOOD",

  /**
   * Therapeutic Product Alert
   */
  TPROD: "TPROD",

  /**
   * Drug Interaction Alert
   */
  DRG: "DRG",

  /**
   * Natural Health Product Alert
   */
  NHP: "NHP",

  /**
   * Non-Prescription Interaction Alert
   */
  NONRX: "NONRX",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type InteractionDetectedIssueCodeCode =
  typeof InteractionDetectedIssueCodeCode[keyof typeof InteractionDetectedIssueCodeCode];
