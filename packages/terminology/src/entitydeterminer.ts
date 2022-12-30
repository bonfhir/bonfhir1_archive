/**
 * EntityDeterminer in natural language grammar is the class of words that comprises articles, demonstrative pronouns, and quantifiers. In the RIM, determiner is a structural code in the Entity class to distinguish whether any given Entity object stands for some, any one, or a specific thing.
 * http://terminology.hl7.org/ValueSet/v3-EntityDeterminer
 */
export const EntityDeterminerCode = {
  /**
   * specific
   */
  INSTANCE: "INSTANCE",

  /**
   * specific group
   */
  GROUP: "GROUP",

  /**
   * described
   */
  KIND: "KIND",

  /**
   * described group
   */
  GROUPKIND: "GROUPKIND",

  /**
   * described quantified
   */
  QUANTIFIED_KIND: "QUANTIFIED_KIND",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type EntityDeterminerCode =
  typeof EntityDeterminerCode[keyof typeof EntityDeterminerCode];
