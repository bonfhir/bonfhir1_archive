/**
 * **Description:** A role recognized through the eligibility of a party to play a subscriber for benefits covered or provided under a health insurance policy.
 * http://terminology.hl7.org/ValueSet/v3-SubscriberCoveredPartyRoleType
 */
export const SubscriberCoveredPartyRoleTypeCode = {
  /**
   * SubscriberCoveredPartyRoleType
   */
  _SubscriberCoveredPartyRoleType: "_SubscriberCoveredPartyRoleType",

  /**
   * continuity of coverage beneficiary
   */
  COCBEN: "COCBEN",

  /**
   * retiree
   */
  RETIREE: "RETIREE",

  /**
   * military
   */
  MIL: "MIL",

  /**
   * active duty military
   */
  ACTMIL: "ACTMIL",

  /**
   * retired military
   */
  RETMIL: "RETMIL",

  /**
   * veteran
   */
  VET: "VET",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type SubscriberCoveredPartyRoleTypeCode =
  typeof SubscriberCoveredPartyRoleTypeCode[keyof typeof SubscriberCoveredPartyRoleTypeCode];
