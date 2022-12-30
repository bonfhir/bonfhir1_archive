/**
 * The value set to instantiate this attribute should be drawn from a terminologically robust code system that consists of or contains concepts to support describing the reason why a dose is considered to be subpotent. This value set is provided as a suggestive example.
 * http://terminology.hl7.org/ValueSet/immunization-subpotent-reason
 */
export const ImmunizationSubpotentReasonCode = {
  /**
   * Partial Dose
   */
  partialdose: "partialdose",

  /**
   * Cold Chain Break
   */
  coldchainbreak: "coldchainbreak",

  /**
   * Manufacturer Recall
   */
  recall: "recall",

  /**
   * Adverse Storage
   */
  adversestorage: "adversestorage",

  /**
   * Expired Product
   */
  expired: "expired",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type ImmunizationSubpotentReasonCode =
  typeof ImmunizationSubpotentReasonCode[keyof typeof ImmunizationSubpotentReasonCode];
