/**
 * A code that specifies how an ActRelationship or Participation contributes to the context of an Act, and whether it may be propagated to descendent Acts whose association allows such propagation (see also attributes Participation.contextControlCode, ActRelationship.contextControlCode, ActRelationship.contextConductionInd).
 * http://terminology.hl7.org/ValueSet/v3-ContextControl
 */
export const ContextControlCode = {
  /**
   * ContextControlAdditive
   */
  ContextControlAdditive: "_ContextControlAdditive",

  /**
   * additive, non-propagating
   */
  additivenonpropagating: "AN",

  /**
   * additive, propagating
   */
  additivepropagating: "AP",

  /**
   * ContextControlNonPropagating
   */
  ContextControlNonPropagating: "_ContextControlNonPropagating",

  /**
   * overriding, non-propagating
   */
  overridingnonpropagating: "ON",

  /**
   * ContextControlOverriding
   */
  ContextControlOverriding: "_ContextControlOverriding",

  /**
   * overriding, propagating
   */
  overridingpropagating: "OP",

  /**
   * ContextControlPropagating
   */
  ContextControlPropagating: "_ContextControlPropagating",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type ContextControlCode =
  typeof ContextControlCode[keyof typeof ContextControlCode];
