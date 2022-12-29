/**
 * **Description:**Coded observation values for coverage limitations, for e.g., types of claims or types of parties covered under a policy or program.
 * http://terminology.hl7.org/ValueSet/v3-CoverageLimitObservationValue
 */
export const CoverageLimitObservationValueCode = {
  /**
   * CoverageLimitObservationValue
   */
  CoverageLimitObservationValue: "_CoverageLimitObservationValue",

  /**
   * CoverageLevelObservationValue
   */
  CoverageLevelObservationValue: "_CoverageLevelObservationValue",

  /**
   * adult child
   */
  adultchild: "ADC",

  /**
   * child
   */
  child: "CHD",

  /**
   * dependent
   */
  dependent: "DEP",

  /**
   * domestic partner
   */
  domesticpartner: "DP",

  /**
   * employee
   */
  employee: "ECH",

  /**
   * family coverage
   */
  familycoverage: "FLY",

  /**
   * individual
   */
  individual: "IND",

  /**
   * same sex partner
   */
  samesexpartner: "SSP",

  /**
   * CoverageItemLimitObservationValue
   */
  CoverageItemLimitObservationValue: "_CoverageItemLimitObservationValue",

  /**
   * CoverageLocationLimitObservationValue
   */
  CoverageLocationLimitObservationValue:
    "_CoverageLocationLimitObservationValue",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type CoverageLimitObservationValueCode =
  typeof CoverageLimitObservationValueCode[keyof typeof CoverageLimitObservationValueCode];
