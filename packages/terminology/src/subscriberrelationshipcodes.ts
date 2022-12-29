/**
 * This value set includes codes for the relationship between the Subscriber and the Beneficiary (insured/covered party/patient).
 * http://terminology.hl7.org/ValueSet/subscriber-relationship
 */
export const SubscriberRelationshipCodesCode = {
  /**
   * Child
   */
  Child: "child",

  /**
   * Parent
   */
  Parent: "parent",

  /**
   * Spouse
   */
  Spouse: "spouse",

  /**
   * Common Law Spouse
   */
  CommonLawSpouse: "common",

  /**
   * Other
   */
  Other: "other",

  /**
   * Self
   */
  Self: "self",

  /**
   * Injured Party
   */
  InjuredParty: "injured",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type SubscriberRelationshipCodesCode =
  typeof SubscriberRelationshipCodesCode[keyof typeof SubscriberRelationshipCodesCode];
