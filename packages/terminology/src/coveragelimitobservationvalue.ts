/**
 * **Description:**Coded observation values for coverage limitations, for e.g., types of claims or types of parties covered under a policy or program.
 * http://terminology.hl7.org/ValueSet/v3-CoverageLimitObservationValue
 */
export const CoverageLimitObservationValueCode = {
  /**
   * CoverageLimitObservationValue
   */
  _CoverageLimitObservationValue: "_CoverageLimitObservationValue",

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

  /**
   * CoverageItemLimitObservationValue
   */
  _CoverageItemLimitObservationValue: "_CoverageItemLimitObservationValue",

  /**
   * CoverageLocationLimitObservationValue
   */
  _CoverageLocationLimitObservationValue:
    "_CoverageLocationLimitObservationValue",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type CoverageLimitObservationValueCode =
  typeof CoverageLimitObservationValueCode[keyof typeof CoverageLimitObservationValueCode];
