/**
 * Relates a component (player) to a mixture (scoper). E.g., Glucose and Water are ingredients of D5W, latex may be an ingredient in a tracheal tube.
 * http://terminology.hl7.org/ValueSet/v3-RoleClassIngredientEntity
 */
export const RoleClassIngredientEntityCode = {
  /**
   * ingredient
   */
  INGR: "INGR",

  /**
   * active ingredient
   */
  ACTI: "ACTI",

  /**
   * active ingredient - basis of strength
   */
  ACTIB: "ACTIB",

  /**
   * active ingredient - moiety is basis of strength
   */
  ACTIM: "ACTIM",

  /**
   * active ingredient - reference substance is basis of strength
   */
  ACTIR: "ACTIR",

  /**
   * adjuvant
   */
  ADJV: "ADJV",

  /**
   * additive
   */
  ADTV: "ADTV",

  /**
   * base
   */
  BASE: "BASE",

  /**
   * contaminant ingredient
   */
  CNTM: "CNTM",

  /**
   * inactive ingredient
   */
  IACT: "IACT",

  /**
   * color additive
   */
  COLR: "COLR",

  /**
   * flavor additive
   */
  FLVR: "FLVR",

  /**
   * preservative
   */
  PRSV: "PRSV",

  /**
   * stabilizer
   */
  STBL: "STBL",

  /**
   * mechanical ingredient
   */
  MECH: "MECH",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type RoleClassIngredientEntityCode =
  typeof RoleClassIngredientEntityCode[keyof typeof RoleClassIngredientEntityCode];
