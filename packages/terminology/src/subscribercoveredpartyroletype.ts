/**
 * **Description:** A role recognized through the eligibility of a party to play a subscriber for benefits covered or provided under a health insurance policy.
 * http://terminology.hl7.org/ValueSet/v3-SubscriberCoveredPartyRoleType
 */
export const SubscriberCoveredPartyRoleTypeCode = {
  /**
   * SubscriberCoveredPartyRoleType
   */
  SubscriberCoveredPartyRoleType: "_SubscriberCoveredPartyRoleType",

  /**
   * continuity of coverage beneficiary
   */
  continuityofcoveragebeneficiary: "COCBEN",

  /**
   * retiree
   */
  retiree: "RETIREE",

  /**
   * military
   */
  military: "MIL",

  /**
   * active duty military
   */
  activedutymilitary: "ACTMIL",

  /**
   * retired military
   */
  retiredmilitary: "RETMIL",

  /**
   * veteran
   */
  veteran: "VET",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type SubscriberCoveredPartyRoleTypeCode =
  typeof SubscriberCoveredPartyRoleTypeCode[keyof typeof SubscriberCoveredPartyRoleTypeCode];
