/**
 * The generalization relationship can be used to express categorical knowledge about services (e.g., amilorid, triamterene, and spironolactone have the common generalization potassium sparing diuretic).
 * http://terminology.hl7.org/ValueSet/v3-ActRelationshipHasGeneralization
 */
export const ActRelationshipHasGeneralizationCode = {
  /**
   * has generalization
   */
  GEN: "GEN",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type ActRelationshipHasGeneralizationCode =
  typeof ActRelationshipHasGeneralizationCode[keyof typeof ActRelationshipHasGeneralizationCode];
