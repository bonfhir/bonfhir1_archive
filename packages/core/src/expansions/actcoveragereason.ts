/**
 * **Description:**Codes used to specify reasons or criteria relating to coverage provided under a policy or program. May be used to convey reasons pertaining to coverage contractual provisions, including criteria for eligibility, coverage limitations, coverage maximums, or financial participation required of covered parties.
 * http://terminology.hl7.org/ValueSet/v3-ActCoverageReason
 */
export const ActCoverageReasonCode = {
  /**
   * ActCoverageReason
   */
  _ActCoverageReason: "_ActCoverageReason",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type ActCoverageReasonCode =
  typeof ActCoverageReasonCode[keyof typeof ActCoverageReasonCode];
