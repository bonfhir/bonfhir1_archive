/**
 * Relates a component (player) to a mixture (scoper). E.g., Glucose and Water are ingredients of D5W, latex may be an ingredient in a tracheal tube.
 * http://terminology.hl7.org/ValueSet/v3-RoleClassIngredientEntity
 */
export const RoleClassIngredientEntityCode = {
  /**
   * ingredient
   */
  ingredient: "INGR",

  /**
   * active ingredient
   */
  activeingredient: "ACTI",

  /**
   * active ingredient - basis of strength
   */
  activeingredientbasisofstrength: "ACTIB",

  /**
   * active ingredient - moiety is basis of strength
   */
  activeingredientmoietyisbasisofstrength: "ACTIM",

  /**
   * active ingredient - reference substance is basis of strength
   */
  activeingredientreferencesubstanceisbasisofstrength: "ACTIR",

  /**
   * adjuvant
   */
  adjuvant: "ADJV",

  /**
   * additive
   */
  additive: "ADTV",

  /**
   * base
   */
  base: "BASE",

  /**
   * contaminant ingredient
   */
  contaminantingredient: "CNTM",

  /**
   * inactive ingredient
   */
  inactiveingredient: "IACT",

  /**
   * color additive
   */
  coloradditive: "COLR",

  /**
   * flavor additive
   */
  flavoradditive: "FLVR",

  /**
   * preservative
   */
  preservative: "PRSV",

  /**
   * stabilizer
   */
  stabilizer: "STBL",

  /**
   * mechanical ingredient
   */
  mechanicalingredient: "MECH",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type RoleClassIngredientEntityCode =
  typeof RoleClassIngredientEntityCode[keyof typeof RoleClassIngredientEntityCode];
