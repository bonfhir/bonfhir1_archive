/**
 * **Definition:**An act that is considered likely to occur in the future. The essential feature of an act expressed in expectation mood is that it is likely to occur. An expectation may be desirable, undesirable or neutral in effect.

**Examples:**Prognosis of a condition, Expected date of discharge from hospital, patient will likely need an emergency decompression of the intracranial pressure by morning.

**Discussion:**INT (intent) reflects a plan for the future, which is a declaration to do something. This contrasts with expectation, which is a prediction that something will happen in the future. GOL (goal) reflects a hope rather than a prediction. RSK (risk) reflects a potential negative event that may or may not be expected to happen.
 * http://terminology.hl7.org/ValueSet/v3-ActMoodExpectation
 */
export const ActMoodExpectationCode = {
  /**
   * expectation
   */
  expectation: "EXPEC",

  /**
   * Goal
   */
  Goal: "GOL",

  /**
   * risk
   */
  risk: "RSK",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type ActMoodExpectationCode =
  typeof ActMoodExpectationCode[keyof typeof ActMoodExpectationCode];
