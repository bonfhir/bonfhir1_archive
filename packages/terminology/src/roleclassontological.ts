/**
 * A relationship in which the scoping Entity defines or specifies what the playing Entity is. Thus, the player's "being" (Greek: ontos) is specified.
 * http://terminology.hl7.org/ValueSet/v3-RoleClassOntological
 */
export const RoleClassOntologicalCode = {
  /**
   * equivalent entity
   */
  equivalententity: "EQUIV",

  /**
   * same
   */
  same: "SAME",

  /**
   * subsumed by
   */
  subsumedby: "SUBY",

  /**
   * has generalization
   */
  hasgeneralization: "GEN",

  /**
   * has generic
   */
  hasgeneric: "GRIC",

  /**
   * instance
   */
  instance: "INST",

  /**
   * subsumer
   */
  subsumer: "SUBS",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type RoleClassOntologicalCode =
  typeof RoleClassOntologicalCode[keyof typeof RoleClassOntologicalCode];
