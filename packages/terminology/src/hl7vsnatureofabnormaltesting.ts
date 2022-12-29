/**
 * Value Set of codes that specify the nature of an abnormal test.
 * http://terminology.hl7.org/ValueSet/v2-0080
 */
export const Hl7VSNatureOfAbnormalTestingCode = {
  /**
   * An age-based population
   */
  Anagebasedpopulation: "A",

  /**
   * None - generic normal range
   */
  Nonegenericnormalrange: "N",

  /**
   * A race-based population
   */
  Aracebasedpopulation: "R",

  /**
   * A sex-based population
   */
  Asexbasedpopulation: "S",

  /**
   * Species
   */
  Species: "SP",

  /**
   * Breed
   */
  Breed: "B",

  /**
   * Strain
   */
  Strain: "ST",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type Hl7VSNatureOfAbnormalTestingCode =
  typeof Hl7VSNatureOfAbnormalTestingCode[keyof typeof Hl7VSNatureOfAbnormalTestingCode];
