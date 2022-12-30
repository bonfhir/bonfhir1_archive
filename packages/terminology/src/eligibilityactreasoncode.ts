/**
 * **Description:**Identifies the reason or rational for why a person is eligible for benefits under an insurance policy or program.

**Examples:** A new employee is eligible for health insurance as an employment benefit. A person meets eligibility criteria for government program coverage based on financial, age or health status.
 * http://terminology.hl7.org/ValueSet/v3-EligibilityActReasonCode
 */
export const EligibilityActReasonCodeCode = {
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
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type EligibilityActReasonCodeCode =
  typeof EligibilityActReasonCodeCode[keyof typeof EligibilityActReasonCodeCode];
