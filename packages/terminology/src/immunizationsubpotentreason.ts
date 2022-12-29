/**
 * The value set to instantiate this attribute should be drawn from a terminologically robust code system that consists of or contains concepts to support describing the reason why a dose is considered to be subpotent. This value set is provided as a suggestive example.
 * http://terminology.hl7.org/ValueSet/immunization-subpotent-reason
 */
export const ImmunizationSubpotentReasonCode = {
  /**
   * Partial Dose
   */
  PartialDose: "partialdose",

  /**
   * Cold Chain Break
   */
  ColdChainBreak: "coldchainbreak",

  /**
   * Manufacturer Recall
   */
  ManufacturerRecall: "recall",

  /**
   * Adverse Storage
   */
  AdverseStorage: "adversestorage",

  /**
   * Expired Product
   */
  ExpiredProduct: "expired",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type ImmunizationSubpotentReasonCode =
  typeof ImmunizationSubpotentReasonCode[keyof typeof ImmunizationSubpotentReasonCode];
