/**
 * The association applies only to the current Act and will not propagate to any child Acts that are related via a conducting ActRelationship (refer to contextConductionInd).
 * http://terminology.hl7.org/ValueSet/v3-ContextControlNonPropagating
 */
export const ContextControlNonPropagatingCode = {
  /**
   * additive, non-propagating
   */
  additivenonpropagating: "AN",

  /**
   * overriding, non-propagating
   */
  overridingnonpropagating: "ON",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type ContextControlNonPropagatingCode =
  typeof ContextControlNonPropagatingCode[keyof typeof ContextControlNonPropagatingCode];
