/**
 * A code that specifies how an ActRelationship or Participation contributes to the context of an Act, and whether it may be propagated to descendent Acts whose association allows such propagation (see also attributes Participation.contextControlCode, ActRelationship.contextControlCode, ActRelationship.contextConductionInd).
 * http://terminology.hl7.org/ValueSet/v3-ContextControl
 */
export const ContextControlCode = {
  /**
   * ContextControlAdditive
   */
  _ContextControlAdditive: "_ContextControlAdditive",

  /**
   * additive, non-propagating
   */
  AN: "AN",

  /**
   * additive, propagating
   */
  AP: "AP",

  /**
   * ContextControlNonPropagating
   */
  _ContextControlNonPropagating: "_ContextControlNonPropagating",

  /**
   * overriding, non-propagating
   */
  ON: "ON",

  /**
   * ContextControlOverriding
   */
  _ContextControlOverriding: "_ContextControlOverriding",

  /**
   * overriding, propagating
   */
  OP: "OP",

  /**
   * ContextControlPropagating
   */
  _ContextControlPropagating: "_ContextControlPropagating",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type ContextControlCode =
  typeof ContextControlCode[keyof typeof ContextControlCode];
