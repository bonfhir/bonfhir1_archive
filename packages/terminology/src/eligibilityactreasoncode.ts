/**
 * **Description:**Identifies the reason or rational for why a person is eligible for benefits under an insurance policy or program.

**Examples:** A new employee is eligible for health insurance as an employment benefit. A person meets eligibility criteria for government program coverage based on financial, age or health status.
 * http://terminology.hl7.org/ValueSet/v3-EligibilityActReasonCode
 */
export const EligibilityActReasonCodeCode = {
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
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type EligibilityActReasonCodeCode =
  typeof EligibilityActReasonCodeCode[keyof typeof EligibilityActReasonCodeCode];
