/**
 * The association propagates to any child Acts that are related via a conducting ActRelationship (refer to contextConductionInd).
 * http://terminology.hl7.org/ValueSet/v3-ContextControlPropagating
 */
export const ContextControlPropagatingCode = {
  /**
   * additive, propagating
   */
  additivepropagating: "AP",

  /**
   * overriding, propagating
   */
  overridingpropagating: "OP",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type ContextControlPropagatingCode =
  typeof ContextControlPropagatingCode[keyof typeof ContextControlPropagatingCode];
