/**
 * ***No description***
 * http://terminology.hl7.org/ValueSet/v3-InteractionDetectedIssueCode
 */
export const InteractionDetectedIssueCodeCode = {
  /**
   * Food Interaction Alert
   */
  FoodInteractionAlert: "FOOD",

  /**
   * Therapeutic Product Alert
   */
  TherapeuticProductAlert: "TPROD",

  /**
   * Drug Interaction Alert
   */
  DrugInteractionAlert: "DRG",

  /**
   * Natural Health Product Alert
   */
  NaturalHealthProductAlert: "NHP",

  /**
   * Non-Prescription Interaction Alert
   */
  NonPrescriptionInteractionAlert: "NONRX",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type InteractionDetectedIssueCodeCode =
  typeof InteractionDetectedIssueCodeCode[keyof typeof InteractionDetectedIssueCodeCode];
