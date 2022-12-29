/**
 * The association is added to the existing context associated with the Act, but overrides an association with the same typeCode. This overriding association will propagate to any descendant Acts reached by conducting ActRelationships (see contextControlCode). Examples: If an 'Author' Participation were marked as "Overriding, Propagating" it means that the author will replace the set of author participations that have propagated from ancestor Acts, and will itself be the only author to propagate to any child Acts that allow context to be propagated.
 * http://terminology.hl7.org/ValueSet/v3-ContextControlOverridingPropagating
 */
export const ContextControlOverridingPropagatingCode = {
  /**
   * overriding, propagating
   */
  overridingpropagating: "OP",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type ContextControlOverridingPropagatingCode =
  typeof ContextControlOverridingPropagatingCode[keyof typeof ContextControlOverridingPropagatingCode];
