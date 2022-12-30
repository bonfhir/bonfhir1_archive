/**
 * **Description:**Codes used to specify reasons or criteria relating to coverage provided under a policy or program. May be used to convey reasons pertaining to coverage contractual provisions, including criteria for eligibility, coverage limitations, coverage maximums, or financial participation required of covered parties.
 * http://terminology.hl7.org/ValueSet/v3-ActCoverageReason
 */
export const ActCoverageReasonCode = {
  /**
   * ActCoverageReason
   */
  _ActCoverageReason: "_ActCoverageReason",

  /**
   * EligibilityActReasonCode
   */
  _EligibilityActReasonCode: "_EligibilityActReasonCode",

  /**
   * ActIneligibilityReason
   */
  _ActIneligibilityReason: "_ActIneligibilityReason",

  /**
   * coverage suspended
   */
  COVSUS: "COVSUS",

  /**
   * deceased
   */
  DECSD: "DECSD",

  /**
   * registered in error
   */
  REGERR: "REGERR",

  /**
   * CoverageEligibilityReason
   */
  _CoverageEligibilityReason: "_CoverageEligibilityReason",

  /**
   * age eligibility
   */
  AGE: "AGE",

  /**
   * crime victim
   */
  CRIME: "CRIME",

  /**
   * disability
   */
  DIS: "DIS",

  /**
   * employment benefit
   */
  EMPLOY: "EMPLOY",

  /**
   * financial eligibility
   */
  FINAN: "FINAN",

  /**
   * health status
   */
  HEALTH: "HEALTH",

  /**
   * multiple criteria eligibility
   */
  MULTI: "MULTI",

  /**
   * property and casualty condition
   */
  PNC: "PNC",

  /**
   * statutory eligibility
   */
  STATUTORY: "STATUTORY",

  /**
   * motor vehicle accident victim
   */
  VEHIC: "VEHIC",

  /**
   * work related
   */
  WORK: "WORK",

  /**
   * ActCoverageProviderReason
   */
  _ActCoverageProviderReason: "_ActCoverageProviderReason",

  /**
   * ActCoverageServiceReason
   */
  _ActCoverageServiceReason: "_ActCoverageServiceReason",

  /**
   * CoverageExclusionReason
   */
  _CoverageExclusionReason: "_CoverageExclusionReason",

  /**
   * CoverageFinancialParticipationReason
   */
  _CoverageFinancialParticipationReason:
    "_CoverageFinancialParticipationReason",

  /**
   * CoverageLimitationReason
   */
  _CoverageLimitationReason: "_CoverageLimitationReason",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type ActCoverageReasonCode =
  typeof ActCoverageReasonCode[keyof typeof ActCoverageReasonCode];
