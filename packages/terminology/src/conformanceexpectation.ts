/**
 * Indicates the degree of adherence to a specified behavior or capability expected for a system to be deemed conformant with a specification.
 * http://terminology.hl7.org/ValueSet/conformance-expectation
 */
export const ConformanceExpectationCode = {
  /**
   * SHALL
   */
  SHALL: "SHALL",

  /**
   * SHOULD
   */
  SHOULD: "SHOULD",

  /**
   * MAY
   */
  MAY: "MAY",

  /**
   * SHOULD-NOT
   */
  SHOULDNOT: "SHOULD-NOT",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type ConformanceExpectationCode =
  typeof ConformanceExpectationCode[keyof typeof ConformanceExpectationCode];
