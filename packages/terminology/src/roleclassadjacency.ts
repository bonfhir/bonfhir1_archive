/**
 * ***No description***
 * http://terminology.hl7.org/ValueSet/v3-RoleClassAdjacency
 */
export const RoleClassAdjacencyCode = {
  /**
   * adjacency
   */
  ADJY: "ADJY",

  /**
   * connection
   */
  CONC: "CONC",

  /**
   * molecular bond
   */
  BOND: "BOND",

  /**
   * continuity
   */
  CONY: "CONY",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type RoleClassAdjacencyCode =
  typeof RoleClassAdjacencyCode[keyof typeof RoleClassAdjacencyCode];
