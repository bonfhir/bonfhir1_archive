/**
 * Value Set of codes that identify the kind of location described in the location definition.
 * http://terminology.hl7.org/ValueSet/v2-0260
 */
export const Hl7VSPatientLocationTypeCode = {
  /**
   * Nursing Unit
   */
  N: "N",

  /**
   * Room
   */
  R: "R",

  /**
   * Bed
   */
  B: "B",

  /**
   * Exam Room
   */
  E: "E",

  /**
   * Operating Room
   */
  O: "O",

  /**
   * Clinic
   */
  C: "C",

  /**
   * Department
   */
  D: "D",

  /**
   * Other Location
   */
  L: "L",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type Hl7VSPatientLocationTypeCode =
  typeof Hl7VSPatientLocationTypeCode[keyof typeof Hl7VSPatientLocationTypeCode];
