/**
 * The association adds to the existing context associated with the Act, but will not propagate to any descendant Acts reached by conducting ActRelationships (see contextControlCode). Examples: If an 'Author' Participation were marked as "Additive, Non-Propagating" it means that the author will be added to the set of author participations that have propagated from ancestor Acts for the purpose of this Act. However only the previously propagated authors will propagate to any child Acts that allow context to be propagated.
 * http://terminology.hl7.org/ValueSet/v3-ContextControlAdditiveNon-propagating
 */
export const ContextControlAdditiveNonPropagatingCode = {
  /**
   * additive, non-propagating
   */
  additivenonpropagating: "AN",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type ContextControlAdditiveNonPropagatingCode =
  typeof ContextControlAdditiveNonPropagatingCode[keyof typeof ContextControlAdditiveNonPropagatingCode];
