/**
 * Value Set of codes that specify the categorization of the person's location.
 * http://terminology.hl7.org/ValueSet/v2-0305
 */
export const Hl7VSPersonLocationTypeCode = {
  /**
   * Clinic
   */
  C: "C",

  /**
   * Department
   */
  D: "D",

  /**
   * Home
   */
  H: "H",

  /**
   * Nursing Unit
   */
  N: "N",

  /**
   * Provider's Office
   */
  O: "O",

  /**
   * Phone
   */
  P: "P",

  /**
   * SNF
   */
  S: "S",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type Hl7VSPersonLocationTypeCode =
  typeof Hl7VSPersonLocationTypeCode[keyof typeof Hl7VSPersonLocationTypeCode];
