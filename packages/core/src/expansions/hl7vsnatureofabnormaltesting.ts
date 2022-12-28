/**
 * Value Set of codes that specify the nature of an abnormal test.
 * http://terminology.hl7.org/ValueSet/v2-0080
 */
export const Hl7VSNatureOfAbnormalTestingCode = {
  /**
   * An age-based population
   */
  A: "A",

  /**
   * None - generic normal range
   */
  N: "N",

  /**
   * A race-based population
   */
  R: "R",

  /**
   * A sex-based population
   */
  S: "S",

  /**
   * Species
   */
  SP: "SP",

  /**
   * Breed
   */
  B: "B",

  /**
   * Strain
   */
  ST: "ST",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type Hl7VSNatureOfAbnormalTestingCode =
  typeof Hl7VSNatureOfAbnormalTestingCode[keyof typeof Hl7VSNatureOfAbnormalTestingCode];
