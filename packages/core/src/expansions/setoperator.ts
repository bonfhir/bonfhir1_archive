/**
 * ***No description***
 * http://terminology.hl7.org/ValueSet/v3-SetOperator
 */
export const SetOperatorCode = {
  /**
   * ValueSetOperator
   */
  _ValueSetOperator: "_ValueSetOperator",

  /**
   * intersect
   */
  A: "A",

  /**
   * convex hull
   */
  H: "H",

  /**
   * periodic hull
   */
  P: "P",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type SetOperatorCode =
  typeof SetOperatorCode[keyof typeof SetOperatorCode];
