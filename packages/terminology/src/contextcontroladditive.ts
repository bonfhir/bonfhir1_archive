/**
 * The association adds to the existing context associated with the Act. Both this association and any associations propagated from ancestor Acts are interpreted as being related to this Act.
 * http://terminology.hl7.org/ValueSet/v3-ContextControlAdditive
 */
export const ContextControlAdditiveCode = {
  /**
   * additive, non-propagating
   */
  additivenonpropagating: "AN",

  /**
   * additive, propagating
   */
  additivepropagating: "AP",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type ContextControlAdditiveCode =
  typeof ContextControlAdditiveCode[keyof typeof ContextControlAdditiveCode];
