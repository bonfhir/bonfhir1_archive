/**
 * The association adds to the existing context associated with the Act, and will propagate to any descendant Acts reached by conducting ActRelationships (see contextControlCode). Examples: If an 'Author' Participation were marked as "Additive, Propagating" it means that the author will be added to the set of author participations that have propagated from ancestor Acts, and will itself propagate with the other authors to any child Acts that allow context to be propagated.
 * http://terminology.hl7.org/ValueSet/v3-ContextControlAdditivePropagating
 */
export const ContextControlAdditivePropagatingCode = {
  /**
   * additive, propagating
   */
  AP: "AP",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type ContextControlAdditivePropagatingCode =
  typeof ContextControlAdditivePropagatingCode[keyof typeof ContextControlAdditivePropagatingCode];
