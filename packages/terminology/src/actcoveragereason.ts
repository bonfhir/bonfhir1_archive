/**
 * **Description:**Codes used to specify reasons or criteria relating to coverage provided under a policy or program. May be used to convey reasons pertaining to coverage contractual provisions, including criteria for eligibility, coverage limitations, coverage maximums, or financial participation required of covered parties.
 * http://terminology.hl7.org/ValueSet/v3-ActCoverageReason
 */
export const ActCoverageReasonCode = {
  /**
   * ActCoverageReason
   */
  ActCoverageReason: "_ActCoverageReason",

  /**
   * EligibilityActReasonCode
   */
  EligibilityActReasonCode: "_EligibilityActReasonCode",

  /**
   * ActIneligibilityReason
   */
  ActIneligibilityReason: "_ActIneligibilityReason",

  /**
   * coverage suspended
   */
  coveragesuspended: "COVSUS",

  /**
   * deceased
   */
  deceased: "DECSD",

  /**
   * registered in error
   */
  registeredinerror: "REGERR",

  /**
   * CoverageEligibilityReason
   */
  CoverageEligibilityReason: "_CoverageEligibilityReason",

  /**
   * age eligibility
   */
  ageeligibility: "AGE",

  /**
   * crime victim
   */
  crimevictim: "CRIME",

  /**
   * disability
   */
  disability: "DIS",

  /**
   * employment benefit
   */
  employmentbenefit: "EMPLOY",

  /**
   * financial eligibility
   */
  financialeligibility: "FINAN",

  /**
   * health status
   */
  healthstatus: "HEALTH",

  /**
   * multiple criteria eligibility
   */
  multiplecriteriaeligibility: "MULTI",

  /**
   * property and casualty condition
   */
  propertyandcasualtycondition: "PNC",

  /**
   * statutory eligibility
   */
  statutoryeligibility: "STATUTORY",

  /**
   * motor vehicle accident victim
   */
  motorvehicleaccidentvictim: "VEHIC",

  /**
   * work related
   */
  workrelated: "WORK",

  /**
   * ActCoverageProviderReason
   */
  ActCoverageProviderReason: "_ActCoverageProviderReason",

  /**
   * ActCoverageServiceReason
   */
  ActCoverageServiceReason: "_ActCoverageServiceReason",

  /**
   * CoverageExclusionReason
   */
  CoverageExclusionReason: "_CoverageExclusionReason",

  /**
   * CoverageFinancialParticipationReason
   */
  CoverageFinancialParticipationReason: "_CoverageFinancialParticipationReason",

  /**
   * CoverageLimitationReason
   */
  CoverageLimitationReason: "_CoverageLimitationReason",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type ActCoverageReasonCode =
  typeof ActCoverageReasonCode[keyof typeof ActCoverageReasonCode];
