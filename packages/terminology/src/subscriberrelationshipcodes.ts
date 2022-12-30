/**
 * This value set includes codes for the relationship between the Subscriber and the Beneficiary (insured/covered party/patient).
 * http://terminology.hl7.org/ValueSet/subscriber-relationship
 */
export const SubscriberRelationshipCodesCode = {
  /**
   * Child
   */
  child: "child",

  /**
   * Parent
   */
  parent: "parent",

  /**
   * Spouse
   */
  spouse: "spouse",

  /**
   * Common Law Spouse
   */
  common: "common",

  /**
   * Other
   */
  other: "other",

  /**
   * Self
   */
  self: "self",

  /**
   * Injured Party
   */
  injured: "injured",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type SubscriberRelationshipCodesCode =
  typeof SubscriberRelationshipCodesCode[keyof typeof SubscriberRelationshipCodesCode];
