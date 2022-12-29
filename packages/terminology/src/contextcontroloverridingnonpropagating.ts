/**
 * The association is added to the existing context associated with the Act, but overrides an association with the same typeCode. However, this overriding association will not propagate to any descendant Acts reached by conducting ActRelationships (see contextControlCode). Examples: If an 'Author' Participation were marked as "Overriding, Non-Propagating" it means that the author will replace the set of author participations that have propagated from ancestor Acts. Furthermore, no author participations whatsoever will propagate to any child Acts that allow context to be propagated.
 * http://terminology.hl7.org/ValueSet/v3-ContextControlOverridingNon-propagating
 */
export const ContextControlOverridingNonPropagatingCode = {
  /**
   * overriding, non-propagating
   */
  overridingnonpropagating: "ON",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type ContextControlOverridingNonPropagatingCode =
  typeof ContextControlOverridingNonPropagatingCode[keyof typeof ContextControlOverridingNonPropagatingCode];
