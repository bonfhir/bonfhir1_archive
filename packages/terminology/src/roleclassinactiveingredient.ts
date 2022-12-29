/**
 * ***No description***
 * http://terminology.hl7.org/ValueSet/v3-RoleClassInactiveIngredient
 */
export const RoleClassInactiveIngredientCode = {
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
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type RoleClassInactiveIngredientCode =
  typeof RoleClassInactiveIngredientCode[keyof typeof RoleClassInactiveIngredientCode];
