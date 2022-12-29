/**
 * ***No description***
 * http://terminology.hl7.org/ValueSet/v3-RoleClassAdjacency
 */
export const RoleClassAdjacencyCode = {
  /**
   * adjacency
   */
  adjacency: "ADJY",

  /**
   * connection
   */
  connection: "CONC",

  /**
   * molecular bond
   */
  molecularbond: "BOND",

  /**
   * continuity
   */
  continuity: "CONY",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type RoleClassAdjacencyCode =
  typeof RoleClassAdjacencyCode[keyof typeof RoleClassAdjacencyCode];
