/**
 * A relationship in which the scoping Entity defines or specifies what the playing Entity is. Thus, the player's "being" (Greek: ontos) is specified.
 * http://terminology.hl7.org/ValueSet/v3-RoleClassOntological
 */
export const RoleClassOntologicalCode = {
  /**
   * equivalent entity
   */
  EQUIV: "EQUIV",

  /**
   * same
   */
  SAME: "SAME",

  /**
   * subsumed by
   */
  SUBY: "SUBY",

  /**
   * has generalization
   */
  GEN: "GEN",

  /**
   * has generic
   */
  GRIC: "GRIC",

  /**
   * instance
   */
  INST: "INST",

  /**
   * subsumer
   */
  SUBS: "SUBS",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type RoleClassOntologicalCode =
  typeof RoleClassOntologicalCode[keyof typeof RoleClassOntologicalCode];
