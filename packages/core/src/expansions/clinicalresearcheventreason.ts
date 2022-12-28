/**
 * **Definition:**Specifies the reason that an event occurred in a clinical research study.
 * http://terminology.hl7.org/ValueSet/v3-ClinicalResearchEventReason
 */
export const ClinicalResearchEventReasonCode = {
  /**
   * retest
   */
  RET: "RET",

  /**
   * scheduled
   */
  SCH: "SCH",

  /**
   * termination
   */
  TRM: "TRM",

  /**
   * unscheduled
   */
  UNS: "UNS",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type ClinicalResearchEventReasonCode =
  typeof ClinicalResearchEventReasonCode[keyof typeof ClinicalResearchEventReasonCode];
