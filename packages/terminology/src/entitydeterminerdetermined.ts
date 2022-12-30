/**
 * The described determiner is used to indicate that the given Entity is taken as a general description of a kind of thing that can be taken in whole, in part, or in multiples.
 * http://terminology.hl7.org/ValueSet/v3-EntityDeterminerDetermined
 */
export const EntityDeterminerDeterminedCode = {
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
export type EntityDeterminerDeterminedCode =
  typeof EntityDeterminerDeterminedCode[keyof typeof EntityDeterminerDeterminedCode];
