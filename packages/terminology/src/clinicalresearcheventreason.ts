/**
 * **Definition:**Specifies the reason that an event occurred in a clinical research study.
 * http://terminology.hl7.org/ValueSet/v3-ClinicalResearchEventReason
 */
export const ClinicalResearchEventReasonCode = {
  /**
   * retest
   */
  retest: "RET",

  /**
   * scheduled
   */
  scheduled: "SCH",

  /**
   * termination
   */
  termination: "TRM",

  /**
   * unscheduled
   */
  unscheduled: "UNS",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type ClinicalResearchEventReasonCode =
  typeof ClinicalResearchEventReasonCode[keyof typeof ClinicalResearchEventReasonCode];
