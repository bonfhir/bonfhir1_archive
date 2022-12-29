/**
 * The value set to instantiate this attribute should be drawn from a terminologically robust code system that consists of or contains concepts to support describing the reason why an administered dose has been assigned a particular status. Often, this reason describes why a dose is considered invalid. This value set is provided as a suggestive example.
 * http://terminology.hl7.org/ValueSet/immunization-evaluation-dose-status-reason
 */
export const ImmunizationEvaluationDoseStatusReasonCodesCode = {
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

  /**
   * Outside Schedule
   */
  OutsideSchedule: "outsideschedule",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type ImmunizationEvaluationDoseStatusReasonCodesCode =
  typeof ImmunizationEvaluationDoseStatusReasonCodesCode[keyof typeof ImmunizationEvaluationDoseStatusReasonCodesCode];
