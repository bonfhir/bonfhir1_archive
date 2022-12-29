/**
 * ***No description***
 * http://terminology.hl7.org/ValueSet/v3-SetOperator
 */
export const SetOperatorCode = {
  /**
   * ValueSetOperator
   */
  ValueSetOperator: "_ValueSetOperator",

  /**
   * exclude
   */
  exclude: "E",

  /**
   * include
   */
  include: "I",

  /**
   * intersect
   */
  intersect: "A",

  /**
   * convex hull
   */
  convexhull: "H",

  /**
   * periodic hull
   */
  periodichull: "P",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type SetOperatorCode =
  typeof SetOperatorCode[keyof typeof SetOperatorCode];
