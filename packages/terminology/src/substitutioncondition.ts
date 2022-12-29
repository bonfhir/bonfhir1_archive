/**
 * Identifies what sort of change is permitted or has occurred between the item that was ordered/requested and the one that was/will be provided.
 * http://terminology.hl7.org/ValueSet/v3-SubstitutionCondition
 */
export const SubstitutionConditionCode = {
  /**
   * No substitution
   */
  Nosubstitution: "NOSUB",

  /**
   * Unconditional
   */
  Unconditional: "UNCOND",

  /**
   * Confirm first
   */
  Confirmfirst: "CONFIRM",

  /**
   * Notify first
   */
  Notifyfirst: "NOTIFY",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type SubstitutionConditionCode =
  typeof SubstitutionConditionCode[keyof typeof SubstitutionConditionCode];
