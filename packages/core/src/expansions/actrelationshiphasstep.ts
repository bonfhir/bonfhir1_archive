/**
 * ***No description***
 * http://terminology.hl7.org/ValueSet/v3-ActRelationshipHasStep
 */
export const ActRelationshipHasStepCode = {
  /**
   * has step
   */
  STEP: "STEP",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type ActRelationshipHasStepCode =
  typeof ActRelationshipHasStepCode[keyof typeof ActRelationshipHasStepCode];
