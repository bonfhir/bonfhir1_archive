/**
 * A code depicting the living arrangements of a person
 * http://terminology.hl7.org/ValueSet/v3-LivingArrangement
 */
export const LivingArrangementCode = {
  /**
   * Institution
   */
  I: "I",

  /**
   * community shelter
   */
  CS: "CS",

  /**
   * Group Home
   */
  G: "G",

  /**
   * Nursing Home
   */
  N: "N",

  /**
   * Extended care facility
   */
  X: "X",

  /**
   * private residence
   */
  PR: "PR",

  /**
   * Independent Household
   */
  H: "H",

  /**
   * Retirement Community
   */
  R: "R",

  /**
   * supported living
   */
  SL: "SL",

  /**
   * homeless
   */
  HL: "HL",

  /**
   * Nomadic
   */
  M: "M",

  /**
   * Transient
   */
  T: "T",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type LivingArrangementCode =
  typeof LivingArrangementCode[keyof typeof LivingArrangementCode];
