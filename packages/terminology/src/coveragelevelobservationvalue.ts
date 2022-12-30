/**
 * **Description:**Coded observation values for types of covered parties under a policy or program based on their personal relationships or employment status.
 * http://terminology.hl7.org/ValueSet/v3-CoverageLevelObservationValue
 */
export const CoverageLevelObservationValueCode = {
  /**
   * CoverageLevelObservationValue
   */
  _CoverageLevelObservationValue: "_CoverageLevelObservationValue",

  /**
   * adult child
   */
  ADC: "ADC",

  /**
   * child
   */
  CHD: "CHD",

  /**
   * dependent
   */
  DEP: "DEP",

  /**
   * domestic partner
   */
  DP: "DP",

  /**
   * employee
   */
  ECH: "ECH",

  /**
   * family coverage
   */
  FLY: "FLY",

  /**
   * individual
   */
  IND: "IND",

  /**
   * same sex partner
   */
  SSP: "SSP",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type CoverageLevelObservationValueCode =
  typeof CoverageLevelObservationValueCode[keyof typeof CoverageLevelObservationValueCode];
